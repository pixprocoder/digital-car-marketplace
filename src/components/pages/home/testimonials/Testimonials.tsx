import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="my-20 lg:w-[1400px] mx-auto">
      <h1 className="my-4 text-center text-4xl text-white">
        What People say about us
      </h1>
      <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
