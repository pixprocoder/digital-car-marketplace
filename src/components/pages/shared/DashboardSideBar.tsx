"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetUsersQuery } from "@/redux/api/apiSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardSideBarPage = () => {
  const { data } = useSession();

  return (
    <section className="min-h-[90vh] w-60  rounded-md bg-gray-900">
      <div className="">
        <div className="text-white px-4 py-4 flex flex-col justify-center items-center">
          <Avatar className="w-12 h-12 rounded-full">
            <AvatarImage src={data?.user?.image} />
            <AvatarFallback />
          </Avatar>
          <h1 className="text-2xl font-bold my-2">{data?.user?.name}</h1>
          <p className="text-sm">{data?.user?.email}</p>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-2 mt-4 px-2 ">
        <Link className="" href="/dashboard/my-order">
          <Button className="w-full">Order</Button>
        </Link>
        <Link href="/dashboard/my-booking">
          <Button className="w-full">Booking</Button>
        </Link>
        <Link href="/dashboard/order-history">
          <Button className="w-full">Order History</Button>
        </Link>
      </div>
    </section>
  );
};

export default DashboardSideBarPage;
