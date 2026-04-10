import { Fragment } from "react";
import Card from "../../components/ui/Card";
import KpiCard from "../../components/ui/KpiCard";
import TaskCard from "../../components/ui/TaskCard";
import OnboardingItem from "../../components/ui/OnboardingItem";
import SignalItem from "../../components/ui/SignalItem";
import ArrowIcon from "../../assets/icons/arrow.svg?react";
import EditIcon from "../../assets/icons/edit.svg?react";
import { useNavigate } from "react-router-dom";
import { sidebarIcons } from "../../components/layout/Sidebar/sidebarIcons";
import RedditLogo from "../../assets/logos/reddit-logo.svg?react";
import AmazonLogo from "../../assets/logos/amazon-logo.svg?react";
import McLogo from "../../assets/logos/mc-logo.svg?react";
import MediumLogo from "../../assets/logos/medium-logo.svg?react";
import { kpiItems } from "../../data/kpiItems";
import { taskItems } from "../../data/taskItems";
import { onboardingItems } from "../../data/onboardingItems";
import { useSignals } from "../../hooks/useSignals";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { signals, complete, remove } = useSignals();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2">
      <Card className="md:col-span-1 lg:col-span-4">
        <div className="py-4 px-[18px]">
          <div className="text-[24px] font-bold">Welcome Alex,</div>
          <div className="text-md text-gray">
            Here's your performance overview where you can track your daily and monthly KPIs
          </div>
        </div>
      </Card>

      <Card
        headerTitle="Replies"
        headerActionName="Open inbox"
        headerActionIcon={ArrowIcon}
        headerActionFunc={() => navigate("/inbox")}
        className="md:col-span-1 lg:col-span-4"
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
        className="md:col-span-2 lg:col-span-4 lg:row-span-2"
      >
        <div className="grid grid-cols-2 gap-2 mt-1">
          {kpiItems.map((item) => (
            <KpiCard key={item.title} {...item} />
          ))}
        </div>
      </Card>

      <Card headerTitle="Today's tasks" className="md:col-span-2 lg:col-span-8">
        <div className="flex flex-wrap gap-2 mt-1">
          {taskItems.map((item, idx) => (
            <Fragment key={item.label}>
              {idx > 0 && <div className="w-px self-stretch bg-border shrink-0 hidden lg:block" />}
              <TaskCard {...item} onClick={() => navigate("/tasks")} />
            </Fragment>
          ))}
        </div>
      </Card>

      <Card
        headerTitle="Signals"
        headerCounter={signals.length}
        className="md:col-span-2 lg:col-span-8 max-h-[60vh] lg:max-h-[412px] overflow-hidden"
      >
        <p className="text-[14px] font-normal leading-[24px] text-gray mb-1 shrink-0">
          Never miss a single opportunity: check out your top signals from your 1st-degree LinkedIn
          connections.
        </p>
        <div className="flex-1 min-h-0 overflow-y-auto flex flex-col divide-y divide-border -mx-4">
          {signals.map((signal) => (
            <SignalItem key={signal.id} signal={signal} onComplete={complete} onDelete={remove} />
          ))}
          {signals.length === 0 && (
            <p className="py-6 text-center text-sm text-gray">All signals handled — great work!</p>
          )}
        </div>
      </Card>

      <Card headerTitle="Onboarding" className="md:col-span-2 lg:col-span-4">
        <div className="flex flex-col divide-y divide-border">
          {onboardingItems.map((item) => (
            <OnboardingItem key={item.label} {...item} />
          ))}
        </div>
      </Card>
    </div>
  );
}
