import Card from "../../components/ui/Card";
import ArrowIcon from "../../assets/arrow.svg?react";
import EditIcon from "../../assets/edit.svg?react";
import { useNavigate } from "react-router-dom";
import { sidebarIcons } from "../../components/layout/Sidebar/sidebarIcons";
import RedditLogo from "../../assets/reddit-logo.svg?react";
import AmazonLogo from "../../assets/amazon-logo.svg?react";
import McLogo from "../../assets/mc-logo.svg?react";
import MediumLogo from "../../assets/medium-logo.svg?react";

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
        <Card className="h-[80px] bg-light">
          <div className="flex items-center justify-between h-full px-2">
            <div className="flex items-center gap-4">
              <div className="h-[48px] w-[48px] rounded-[24px] bg-hover flex justify-center items-center">
                <sidebarIcons.inbox className="text-main w-[24px] h-[24px]" />
              </div>
              <div className="text-[36px] font-medium leading-none">24</div>
            </div>

            <div className="flex items-center -space-x-3">
              {[RedditLogo, AmazonLogo, McLogo, MediumLogo].map((Logo, idx) => (
                <div
                  key={idx}
                  className="h-8 w-8 rounded-full border border-[#D5E0F0] bg-white flex items-center justify-center overflow-hidden"
                  aria-hidden="true"
                >
                  <Logo className="h-full w-full" />
                </div>
              ))}
            </div>
          </div>
        </Card>
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
