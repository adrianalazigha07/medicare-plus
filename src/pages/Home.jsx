import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [tip, setTip] = useState("Drink 8 glasses of water daily.");

  const tips = [
    "Drink 8 glasses of water daily.",
    "Sleep 7-8 hours every night.",
    "Walk for 30 minutes daily.",
    "Schedule a yearly check-up.",
  ];

  const newTip = () => {
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  };

  return (
    <div>
      <h1>MediCare Plus</h1>
      <p>Welcome! We provide caring, professional healthcare for you and your family.</p>
      <Link to="/services">Meet Our Doctors</Link>

      <div className="tip-box">
        <h2>Health Tip</h2>
        <p>{tip}</p>
        <button onClick={newTip}>Show Another Tip</button>
      </div>
    </div>
  );
}
export default Home;