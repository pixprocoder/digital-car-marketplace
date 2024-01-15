import DashboardPage from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <main className="container mx-auto min-h-screen">
      <DashboardPage />
      {children}
    </main>
  );
}
