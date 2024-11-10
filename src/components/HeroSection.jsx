import React, { useState } from "react";
// import firstVideo from "../assets/videos/herofirst.mp4"; // Choose the video you want to play

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true); // Mute state

  // You can set the video you want to play on loop
  // const video = firstVideo; // Set your desired video here

  const toggleMute = () => {
    setIsMuted((prev) => !prev); // Toggle mute state
  };

  return (
    <section className="text-white">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Display video on loop */}
        <video
          autoPlay
          loop
          muted={isMuted} // Set muted based on state
          className="w-full h-full object-cover"
          src={'https://res.cloudinary.com/ddxdrfr2c/video/upload/f_auto:video,q_auto/v1731194842/herovid_b1pd5r.mp4'}
        />

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 p-2 bg-gray-800 bg-opacity-75 text-white font-bold text-lg rounded-md shadow-lg transition hover:bg-gray-700"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
