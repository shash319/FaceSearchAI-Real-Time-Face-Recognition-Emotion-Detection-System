import { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import "../App.css";

const Face = () => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);

  // ✅ START CAMERA
  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  // ✅ STOP CAMERA
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // ✅ LOAD LABELED IMAGES (SAFE VERSION)
  const loadLabeledImages = async () => {

    const people = {
      shasawat: 14,
      guest: 1
    };

    return Promise.all(
      Object.entries(people).map(async ([label, count]) => {

        const descriptions = [];

        for (let i = 1; i <= count; i++) {

          let img;

          try {
            img = await faceapi.fetchImage(`/face-ai/public/faces/${label}/${i}.jpg`);
          } catch {
            try {
              img = await faceapi.fetchImage(`/face-ai/public/faces/${label}/${i}.png`);
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
      })
    );
  };

  // ✅ DETECT FACES
  const detectFaces = (faceMatcher) => {

    const video = videoRef.current;
    const canvas = canvasRef.current;

    const displaySize = {
      width: video.videoWidth,
      height: video.videoHeight
    };

    faceapi.matchDimensions(canvas, displaySize);

    intervalRef.current = setInterval(async () => {

      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withFaceDescriptors();

      const resized = faceapi.resizeResults(detections, displaySize);

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      resized.forEach(result => {

        const bestMatch = faceMatcher.findBestMatch(result.descriptor);

        // ✅ UNKNOWN LOGIC
        let name = "Unknown";
        if (bestMatch.distance < 0.5) {
          name = bestMatch.label;
        }

        const box = result.detection.box;

        const expressions = result.expressions;

        const emotion = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b
        );

        const emojiMap = {
          happy: "😄",
          sad: "😢",
          angry: "😡",
          surprised: "😲",
          neutral: "😐",
          fearful: "😨",
          disgusted: "🤢"
        };

        // 🎨 COLOR BASED ON MATCH
        ctx.strokeStyle = name === "Unknown" ? "red" : "#00eaff";
        ctx.lineWidth = 3;
        ctx.setLineDash([6, 4]);

        ctx.strokeRect(box.x, box.y, box.width, box.height);

        // LABEL
        ctx.font = "13px Orbitron, Arial";
        ctx.fillStyle = "#00eaff";
        ctx.lineWidth = 3;
        

        ctx.fillText(
          `${name} (${bestMatch.distance.toFixed(2)}) | ${emojiMap[emotion]} ${emotion}`,
          box.x,
          box.y - 10
        );
      });

    }, 200);
  };

  useEffect(() => {

    const start = async () => {

      try {

        const MODEL_URL = "/models";

        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);

        const labeledDescriptors = await loadLabeledImages();

        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.5);

        await startVideo();

        videoRef.current.addEventListener("play", () => {
          detectFaces(faceMatcher);
        });

      } catch (err) {
        console.error("❌ Loading failed:", err);

        // 🔥 Still open camera even if error
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
          className="video"
        />

        <canvas
          ref={canvasRef}
          className="canvas"
        />

        <div className="scan-line"></div>

      </div>

    </div>
  );
};

export default Face;