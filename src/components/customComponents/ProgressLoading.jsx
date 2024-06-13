"use client";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 3000); // Adjust the interval speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="percentage">{percentage}%</div>
        <div className="progressBar">
          <div className="progress" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
