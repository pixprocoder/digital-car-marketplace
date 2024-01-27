import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosNotifications } from "react-icons/io";

const DashboardTopBar = () => {
  return (
    <section className="bg-gray-900 w-full p-2 rounded-md">
      <div className="flex w-full justify-end gap-2">
        <span className="rounded-full border  border-white cursor-pointer">
          <IoIosNotifications className="text-2xl text-primary  " />
        </span>
      </div>
    </section>
  );
};

export default DashboardTopBar;
