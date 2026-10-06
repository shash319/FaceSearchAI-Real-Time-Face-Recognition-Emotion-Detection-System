import { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import "../App.css";

const Face = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);
  const faceMatcherRef = useRef(null);

  // ✅ START CAMERA
  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      console.error("❌ Camera error:", err);
      alert("Camera permission denied or not available");
    }
  };

  // ✅ STOP CAMERA
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  //✅ LOAD LABELED IMAGES - (SAFE VERSION)
  const loadLabeledImages = async () => {
    const people = {
      Shasawat: 14,
      Guest: 1,
      Elon_Musk: 7,
      Bill_Gates: 8,
      Jensen_Huang: 8,
      Mark_Zuck: 9,
      Ratan_Tata: 9,
      Sam_Altman: 8,
      Shushant_SR: 10,
    };

    return Promise.all(
      Object.entries(people).map(async ([label, count]) => {
        const descriptions = [];

        for (let i = 1; i <= count; i++) {
          let img;

          try {
            img = await faceapi.fetchImage(
              `${import.meta.env.BASE_URL}faces/${label}/${i}.jpg`,
            );
          } catch {
            try {
              img = await faceapi.fetchImage(
                `${import.meta.env.BASE_URL}faces/${label}/${i}.png`,
              );
            } catch {
              console.warn(`❌ Missing: ${label}/${i}`);
              continue;
            }
          }

          const detection = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();

          if (!detection) {
            console.warn(`⚠️ No face in ${label}/${i}`);
            continue;
          }

          descriptions.push(detection.descriptor);
        }

        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      }),
    );
  };

  // ✅ DETECT FACES
  const detectFaces = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const displaySize = {
      width: video.videoWidth,
      height: video.videoHeight,
    };

    canvas.width = displaySize.width;
    canvas.height = displaySize.height;

    faceapi.matchDimensions(canvas, displaySize);

    intervalRef.current = setInterval(async () => {
      if (!video || !faceMatcherRef.current) return;

      try {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions()
          .withFaceDescriptors();

        const resized = faceapi.resizeResults(detections, displaySize);

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        resized.forEach((result) => {
          const bestMatch = faceMatcherRef.current.findBestMatch(
            result.descriptor,
          );

          // ✅ UNKNOWN LOGIC
          let name = "Unknown";
          if (bestMatch.distance < 0.5) {
            name = bestMatch.label;
          }

          const box = result.detection.box;

          const expressions = result.expressions;

          const emotion = Object.keys(expressions).reduce((a, b) =>
            expressions[a] > expressions[b] ? a : b,
          );

          const emojiMap = {
            happy: "😄",
            sad: "😢",
            angry: "😡",
            surprised: "😲",
            neutral: "😐",
            fearful: "😨",
            disgusted: "🤢",
          };

          // 🎨 COLOR BASED ON MATCH
          ctx.strokeStyle = name === "Unknown" ? "red" : "#00eaff";
          ctx.lineWidth = 3;
          ctx.setLineDash([6, 4]);

          ctx.strokeRect(box.x, box.y, box.width, box.height);

          // LABEL
          ctx.font = "bold 16px Orbitron, Arial";
          ctx.fillStyle = "#00eaff";
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#000000";

          // Add stroke for text readability
          ctx.strokeText(
            `${name} (${bestMatch.distance.toFixed(2)}) | ${emojiMap[emotion]} ${emotion}`,
            box.x,
            box.y - 10,
          );

          ctx.fillText(
            `${name} (${bestMatch.distance.toFixed(2)}) | ${emojiMap[emotion]} ${emotion}`,
            box.x,
            box.y - 10,
          );
        });
      } catch (err) {
        console.error("Detection error:", err);
      }
    }, 200);
  };

  useEffect(() => {
    const start = async () => {
      try {
        console.log("🚀 Starting face detection initialization...");

        const MODEL_URL = `${import.meta.env.BASE_URL}models`;
        console.log("📦 Loading models from:", MODEL_URL);

        // Load ALL required models
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
          faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        ]);

        console.log("✅ All models loaded successfully!");

        console.log("📸 Loading labeled images...");
        const labeledDescriptors = await loadLabeledImages();

        if (labeledDescriptors.length === 0) {
          console.warn(
            "⚠️ No labeled faces found - using unknown detection only",
          );
        } else {
          console.log(`✅ Loaded ${labeledDescriptors.length} labeled faces`);
        }

        faceMatcherRef.current = new faceapi.FaceMatcher(
          labeledDescriptors,
          0.5,
        );

        console.log("🎥 Starting camera...");
        await startVideo();

        console.log("✅ Camera started! Waiting for video to play...");

        // Better way to handle video ready state
        if (videoRef.current) {
          videoRef.current.onloadedmetadata = () => {
            console.log("✅ Video metadata loaded, starting detection...");
            detectFaces();
          };

          // Fallback if onloadedmetadata doesn't trigger
          videoRef.current.onplay = () => {
            if (!intervalRef.current) {
              console.log("✅ Video playing, starting detection...");
              detectFaces();
            }
          };
        }
      } catch (err) {
        console.error("❌ Initialization failed:", err);
        console.error("Error details:", err.message);

        // Try to open camera anyway
        console.log("🔄 Attempting to open camera despite errors...");
        await startVideo();
      }
    };

    start();

    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="face-app">
      <h1 className="title">AI Face Detection</h1>

      <div className="camera-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="video"
          style={{ width: "100%", height: "auto" }}
        />

        <canvas
          ref={canvasRef}
          className="canvas"
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        <div className="scan-line"></div>
      </div>
    </div>
  );
};

export default Face;
