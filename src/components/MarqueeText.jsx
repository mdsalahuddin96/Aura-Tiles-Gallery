import React from "react";
import Marquee from "react-fast-marquee";


const MarqueeText = () => {
  return (
    <div className="border border-gray-400 bg-[var(--bg-card)] text-xl mt-4 p-4">
      <Marquee speed={100} pauseOnHover={true}>
        New Arrivals: Marble Tile    |    Weekly Feature: Modern Geometric Patterns | Join the Community...
      </Marquee>
    </div>
  );
};

export default MarqueeText;
