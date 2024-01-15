import DashboardSideBarPage from "@/components/pages/shared/DashboardSideBar";
import React from "react";

const DashboardPage = () => {
  return (
    <section className="">
      <div className="flex my-4">
        <DashboardSideBarPage />
        <div className="ml-4">
          <h1 className="text-white">Content here</h1>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
