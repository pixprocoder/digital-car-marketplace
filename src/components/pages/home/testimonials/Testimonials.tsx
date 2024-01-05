import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="my-20">
      <h1 className="my-4 text-center">What People say about us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
