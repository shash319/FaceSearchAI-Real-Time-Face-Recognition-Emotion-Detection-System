import React, { useState } from "react";
import "../Compo/Compo.css";

const Vip = () => {

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // Card number formatting
  const handleCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0,16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(value);
  };

  // Expiry formatting MM/YY
 const handleExpiry = (e) => {
  let value = e.target.value.replace(/\D/g, "").slice(0,4);

  if (value.length >= 1 && !["0","1"].includes(value[0])) return;

  if (value.length >= 2) {
    const month = value.slice(0,2);

    if (
      month === "00" ||
      (month[0] === "1" && month[1] > "2")
    ) return;
  }

  if (value.length >= 3) {
    value = value.slice(0,2) + "/" + value.slice(2);
  }

  setExpiry(value);
};

  // CVV restriction
  const handleCvv = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0,3);
    setCvv(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(cardNumber.length === 19 && expiry.length === 5 && cvv.length === 3){
      setMessage("✅ Payment Successful!");
      setSuccess(true);
    }else{
      setMessage("❌ Invalid Details");
      setSuccess(false);
    }
  };

  return (
    <div id="vip">

      <h2>Ready, To be a VIP Member</h2>

      <div className={`payment-container ${success ? "success-payment": message ? "invalid-payment": ""}`}>
        <h2>Payment Gateway</h2>

        <form onSubmit={handleSubmit}>

        <label>Cardholder Name</label>
        <input
          type="text"
          id="card-name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => {
            if (!/[a-zA-Z\s]/.test(e.key)) e.preventDefault();
          }}
          style={{ textTransform: "uppercase" }}
          required
        />


          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={handleCardNumber}
            maxLength="19"
            required
          />

          <label>Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiry}
            maxLength="5"
            required
          />

          <label>CVV</label>
          <input
            type="password"
            placeholder="123"
            value={cvv}
            onChange={handleCvv}
            maxLength="3"
            required
          />

          <button type="submit">Pay Now</button>

        </form>

        <p className="pay-message">{message}</p>

      </div>
    </div>
  );
};

export default Vip;
