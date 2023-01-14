import React from "react";
import "./Loading.css";

export const LoadingRipple = () => {
  return (
    <div className="LoadingRippleContainer">
      <div className="loadingRipple">
        <div></div>
        <div>Loading...</div>
      </div>
    </div>
  );
};

export const LoadingHeart = () => {
  return (
    <div className="LoadingHeartContainer">
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  );
};
