import Card from "../../components/ui/Card";
import ArrowIcon from "../../assets/arrow.svg?react";
import EditIcon from "../../assets/edit.svg?react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-2">
      <Card className="xl:col-span-4">
        <div className="py-4 px-[18px]">
          <div className="text-[24px] font-bold">Welcome Alex,</div>
          <div className="text-md text-gray">
            Here’s your performance overview where you can track your daily and monthly KPIs
          </div>
        </div>
      </Card>

      <Card
        headerTitle="Replies"
        headerActionName="Open inbox"
        headerActionIcon={ArrowIcon}
        headerActionFunc={() => navigate("/inbox")}
        className="xl:col-span-4"
      >
        <Card className="h-[80px] bg-light">test</Card>
      </Card>

      <Card
        headerTitle="May's Performance"
        headerActionName="Edit KPIs"
        headerActionIcon={EditIcon}
        className="xl:col-span-4 xl:row-span-2"
      >
        Test
      </Card>

      <Card headerTitle="Tasks" className="xl:col-span-8">
        test
      </Card>

      <Card headerTitle="Signals" headerCounter={12} className="xl:col-span-8">
        test
      </Card>

      <Card headerTitle="Onboarding" className="xl:col-span-4">
        test
      </Card>
    </div>
  );
}
