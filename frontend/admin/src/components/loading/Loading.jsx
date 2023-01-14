import React from "react";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className="LoadingContainer">
      <h1 style={{ color: "#f29d41" }}>Loading...</h1>
      <div className="loading">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
