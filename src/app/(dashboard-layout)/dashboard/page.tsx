import { Tabs, TabsContent } from "@/components/ui/tabs";

const DashboardPage = () => {
  return (
    <section className="text-white">
      <h1>Hello</h1>
      <Tabs>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default DashboardPage;
