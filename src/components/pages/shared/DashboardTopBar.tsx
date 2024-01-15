import { Button } from "@/components/ui/button";
import React from "react";

const DashboardTopBar = () => {
  return (
    <section className="bg-blue-900 w-full p-2 rounded-md">
      <div className="flex w-full justify-end gap-2">
        <Button>N</Button>
        <Button>M</Button>
        <Button>O</Button>
      </div>
    </section>
  );
};

export default DashboardTopBar;
