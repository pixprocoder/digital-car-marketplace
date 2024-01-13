"use client";
import { useGetServicesQuery } from "@/redux/api/apiSlice";
import FeatureServiceCard from "./FeatureServiceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FeatureServices = () => {
  const { data, isLoading } = useGetServicesQuery(undefined);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <section className="my-20 lg:w-[1400px] mx-auto">
      <div className="flex justify-between my-2 ">
        <h1 className="my-4  text-white">Feature Services</h1>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search Services" />
          <Button type="submit">Search</Button>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((service: any) => (
          <FeatureServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </section>
  );
};

export default FeatureServices;
