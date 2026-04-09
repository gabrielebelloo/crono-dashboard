import Card from "../../components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-2">
      <Card className="xl:col-span-4">Welcome</Card>

      <Card className="xl:col-span-4">Replies</Card>

      <Card className="xl:col-span-4 xl:row-span-2">May's Performance</Card>

      <Card className="xl:col-span-8">Tasks</Card>

      <Card className="xl:col-span-8">Signals</Card>

      <Card className="xl:col-span-4">Onboarding</Card>
    </div>
  );
}
