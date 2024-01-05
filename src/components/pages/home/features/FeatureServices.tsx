import React from "react";
import FeatureServiceCard from "./FeatureServiceCard";

const FeatureServices = () => {
  return (
    <section className="my-20">
      <h1 className="my-4 text-center">Feature Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FeatureServiceCard />
        <FeatureServiceCard />
        <FeatureServiceCard />
        <FeatureServiceCard />
        <FeatureServiceCard />
        <FeatureServiceCard />
        <FeatureServiceCard />
        <FeatureServiceCard />
      </div>
    </section>
  );
};

export default FeatureServices;
