import React from "react";

export const ProgressBar = ({ min, max, value, title }) => {
  return (
    <div className="progressBarContainer ">
      <p>{title}</p>
      <input
        className="progressBar"
        type="range"
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
};
