import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";

export function Cart() {
  const { value } = useAppSelector((state) => state.service);

  return (
    <SheetContent className="bg-[#0f172a]  border-none">
      <SheetHeader>
        <SheetTitle className="text-white">MY CART</SheetTitle>
      </SheetHeader>
      {value.length === 0 ? (
        <p className="text-center text-white my-4">No Item found</p>
      ) : (
        ""
      )}
      <div className="grid gap-2 my-4">
        {value.map((item: any) => (
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
          <Link href="/booking">
            <Button disabled={value.length <= 0} type="submit">
              Proceed To Booking
            </Button>
          </Link>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
