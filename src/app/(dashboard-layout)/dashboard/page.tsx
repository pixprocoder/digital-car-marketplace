import DashboardSideBarPage from "@/components/pages/shared/DashboardSideBar";
import DashboardTopBar from "@/components/pages/shared/DashboardTopBar";
import React from "react";

const DashboardPage = () => {
  return (
    <section className="">
      <div className="flex my-4">
        <DashboardSideBarPage />
        <div className="ml-4 w-full ">
          <DashboardTopBar />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
