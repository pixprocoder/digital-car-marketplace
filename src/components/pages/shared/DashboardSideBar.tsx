import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DashboardSideBarPage = () => {
  return (
    <section className="min-h-[90vh] w-60  rounded-md bg-blue-900">
      <div className="">
        <div className="text-white px-4 py-2">
          <h1>My Profile</h1>
          <Avatar>
            <AvatarImage />
            <AvatarFallback />
          </Avatar>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-2 mt-4 px-2">
        <Button>Profile</Button>
        <Button>Order</Button>
        <Button>Booking</Button>
        <Button>Order History</Button>
      </div>
    </section>
  );
};

export default DashboardSideBarPage;
