import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const FeatureServiceCard = ({ service }: any) => {
  console.log(service);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{service.serviceName}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>price: {service.price}</p>
      </CardContent>
      <CardFooter>
        <p>Duration: {service.duration}</p>
        <p className="ml-4">Status: {service.availabilityStatus}</p>
      </CardFooter>
    </Card>
  );
};

export default FeatureServiceCard;
