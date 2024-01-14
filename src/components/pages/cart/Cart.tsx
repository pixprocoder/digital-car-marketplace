import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/redux/hooks/hooks";

export function Cart() {
  const { value } = useAppSelector((state) => state.service);
  console.log(value);
  return (
    <SheetContent className="bg-[#0f172a]  border-none">
      <SheetHeader>
        <SheetTitle className="text-white">MY CART</SheetTitle>
      </SheetHeader>
      <div className="grid gap-2 my-4">
        {value.map((item) => (
          <Card
            key={item.serviceId}
            className=" bg-[#070b14] border-none text-gray-300"
          >
            <CardHeader>
              <div className="flex justify-between">
                <h1>{item.serviceName}</h1>
                <p>${item.price}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Proceed To Checkout</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
