import DashboardSideBarPage from "@/components/pages/shared/DashboardSideBar";
import DashboardTopBar from "@/components/pages/shared/DashboardTopBar";
import ProfileSideBarPage from "@/components/pages/shared/ProfileSideBar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <main className="container mx-auto ">
      <div className="flex my-4">
        <ProfileSideBarPage />
        <div className="ml-4 w-full ">
          <DashboardTopBar />
          {children}
        </div>
      </div>
    </main>
  );
}
