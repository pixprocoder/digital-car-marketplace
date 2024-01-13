import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { addToCart } from "@/redux/features/services/serviceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import React from "react";

const FeatureServiceCard = ({ service }: any) => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const { isSuccessful } = useAppSelector((state) => state.service);

  const handleAddToCart = () => {
    dispatch(addToCart(service));
    toast({
      title: "Wow!! 🎉",
      description: "Service Added Successfully!",
    });
  };

  return (
    <Card className="bg-[#0f172a] border-none text-white flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{service.serviceName}</CardTitle>
        <CardDescription className="mt-2">
          <div className="flex gap-2">
            {service.availabilityStatus === "Available" ? (
              <Badge className="bg-gray-500 hover:bg-gray-500">
                {service.availabilityStatus}
              </Badge>
            ) : (
              <Badge variant="destructive">{service.availabilityStatus}</Badge>
            )}
            <Badge variant="outline" className="text-white">
              {service.duration}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl mt-2">${service.price}</p>

        <p className="text-gray-300 text-sm">
          {service.description} Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempore inventore dolorum repellendus perspiciatis
          impedit. Aliquam, ipsam magnam hic totam doloremque cum
        </p>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button size="sm" variant="secondary">
          View Details
        </Button>
        <Button onClick={handleAddToCart}>Add To Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureServiceCard;
