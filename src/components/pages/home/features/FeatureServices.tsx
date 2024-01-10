"use client";
import { useGetServicesQuery } from "@/redux/api/apiSlice";
import FeatureServiceCard from "./FeatureServiceCard";

const FeatureServices = () => {
  const { data, isLoading } = useGetServicesQuery(undefined);

  return (
    <section className="my-20 w-[1400px] mx-auto">
      <h1 className="my-4 text-center text-4xl text-white">Feature Services</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((service) => (
          <FeatureServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </section>
  );
};

export default FeatureServices;
