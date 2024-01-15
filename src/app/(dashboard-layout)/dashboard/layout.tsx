import DashboardPage from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return <main className="container mx-auto ">{children}</main>;
}
