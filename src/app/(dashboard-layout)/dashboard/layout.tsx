import DashboardSideBarPage from "@/components/pages/shared/DashboardSideBar";
import DashboardPage from "./page";
import DashboardTopBar from "@/components/pages/shared/DashboardTopBar";
import Profile from "./profile/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <main className="container mx-auto ">
      <div className="flex my-4">
        <DashboardSideBarPage />
        <div className="ml-4 w-full ">
          <DashboardTopBar />
          {children}
          <Profile />
        </div>
      </div>
    </main>
  );
}
