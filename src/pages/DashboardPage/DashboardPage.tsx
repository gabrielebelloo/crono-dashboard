import Card from "../../components/ui/Card";
import KpiCard from "../../components/ui/KpiCard";
import type { KpiCardProps } from "../../components/ui/KpiCard";
import ArrowIcon from "../../assets/arrow.svg?react";
import EditIcon from "../../assets/edit.svg?react";
import { useNavigate } from "react-router-dom";
import { sidebarIcons } from "../../components/layout/Sidebar/sidebarIcons";
import RedditLogo from "../../assets/reddit-logo.svg?react";
import AmazonLogo from "../../assets/amazon-logo.svg?react";
import McLogo from "../../assets/mc-logo.svg?react";
import MediumLogo from "../../assets/medium-logo.svg?react";
import ContactsIcon from "../../assets/contacts.svg?react";
import CompaniesIcon from "../../assets/companies.svg?react";
import MeetingsIcon from "../../assets/meetings.svg?react";

const kpiItems: KpiCardProps[] = [
  {
    title: "Contacts engaged",
    icon: ContactsIcon,
    color: "#4C8DFF",
    current: 0,
    max: 500,
    tooltip: "Contacts who have at least one logged activity within the current month",
  },
  {
    title: "Companies engaged",
    icon: CompaniesIcon,
    color: "#4C8DFF",
    current: 0,
    max: 500,
  },
  {
    title: "Activities",
    icon: sidebarIcons.tasks,
    color: "#8B5CF6",
    current: 1000,
    max: 2000,
  },
  {
    title: "Meetings",
    icon: MeetingsIcon,
    color: "#F5B000",
    current: 20,
    max: 30,
  },
  {
    title: "Deals",
    icon: sidebarIcons.tasks,
    color: "#EC4899",
    current: 100,
    max: 200,
  },
  {
    title: "Pipeline",
    color: "#1EBAB2",
    current: 50000,
    max: 100000,
    prefix: "€",
    suffix: "K",
  },
];

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
        <div className="grid grid-cols-2 gap-2 mt-1">
          {kpiItems.map((item) => (
            <KpiCard key={item.title} {...item} />
          ))}
        </div>
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
