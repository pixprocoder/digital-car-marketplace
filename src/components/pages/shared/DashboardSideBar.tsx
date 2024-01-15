import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const DashboardSideBarPage = () => {
  return (
    <section className="min-h-[90vh] w-60  rounded-md bg-blue-900">
      <div className="">
        <div className="text-white px-4 py-4 flex flex-col justify-center items-center">
          <Avatar className="w-12 h-12 rounded-full">
            <AvatarImage />
            <AvatarFallback />
          </Avatar>
          <h1 className="text-2xl font-bold my-2">Smsul Kobir</h1>
          <p className="text-sm">makkobir79@gmail.com</p>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-2 mt-4 px-2">
        <Tabs defaultValue="password" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>

          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

        <Button>Profile</Button>
        <Button>Order</Button>
        <Button>Booking</Button>
        <Button>Order History</Button>
      </div>
    </section>
  );
};

export default DashboardSideBarPage;
