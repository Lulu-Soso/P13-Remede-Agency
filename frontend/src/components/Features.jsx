import React from "react";
import FeatureItem from "./FeatureItem";
import featuresData from "../mockData/featuresData";

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>

      {featuresData.map((feature) => (
        <FeatureItem
          key={feature.id}
          img={feature.image_source}
          altText={feature.image_alt}
          title={feature.title}
          text={feature.description}
        />
      ))}
    </section>
  );
};

export default Features;
