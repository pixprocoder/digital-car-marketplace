import React from "react";

const ServiceDetailPage = ({ params }) => {
  const id = params.serviceId;
  return (
    <div className="container mx-auto">
      <h1 className="text-white">This is service Detail page with: {id}</h1>
    </div>
  );
};

export default ServiceDetailPage;
