"use client";
import { useGetServicesQuery } from "@/redux/api/apiSlice";
import FeatureServiceCard from "./FeatureServiceCard";

const FeatureServices = () => {
  const { data, isLoading } = useGetServicesQuery(undefined);
  console.log(data);

  return (
    <section className="my-20 w-[1400px] mx-auto">
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
