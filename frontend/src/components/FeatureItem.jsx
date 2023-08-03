import React from "react";

const FeatureItem = ({ img, altText, title, text }) => {
  return (
    <div className="feature-item">
      <img src={img} alt={altText} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
