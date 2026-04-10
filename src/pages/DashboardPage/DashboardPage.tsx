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
    <div className="grid grid-cols-1 gap-[8px] md:grid-cols-2 lg:grid-cols-[396px_396px_408px]">
      <Card className="md:col-span-1 lg:col-start-1 lg:row-start-1 box-border h-[142px] w-full max-w-full gap-[8px] !px-[32px] !py-[24px]">
        <h1 className="min-w-0 w-full text-h1 text-dark">Welcome Alex,</h1>
        <p className="min-w-0 w-full text-b1 text-gray">
          {"Here's your performance overview where you can track your daily and monthly KPIs"}
        </p>
      </Card>

      <Card
        headerTitle="Replies"
        headerActionName="Open inbox"
        headerActionIcon={ArrowIcon}
        headerActionFunc={() => navigate("/inbox")}
        className="md:col-span-1 lg:col-start-2 lg:row-start-1 box-border flex h-[142px] w-full max-w-full min-h-0 flex-col items-start overflow-hidden !rounded-[16px]"
      >
        <div className="flex h-[80px] w-full min-w-0 shrink-0 flex-row items-center gap-[16px] rounded-[12px] bg-light py-[16px] pl-[16px] pr-[24px]">
          <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[24px] bg-hover p-[12px]">
            <sidebarIcons.inbox className="h-[24px] w-[24px] shrink-0 text-secondary" />
          </div>
          <div className="shrink-0 text-[36px] font-medium leading-[44px] text-grayHover1">24</div>
          <div className="ml-auto flex h-[32px] shrink-0 items-center">
            <div className="-space-x-[8px] flex items-center">
              {[RedditLogo, AmazonLogo, McLogo, MediumLogo].map((Logo, idx) => (
                <div
                  key={idx}
                  className={`flex h-[32px] w-[32px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] ${
                    idx === 3 ? "bg-stackBlue" : "border border-avatarRing bg-white"
                  }`}
                  aria-hidden="true"
                >
                  <Logo className="h-full w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card
        headerTitle="May's Performance"
        headerActionName="Edit KPIs"
        headerActionIcon={EditIcon}
        className="md:col-span-2 lg:col-start-3 lg:row-start-1 lg:row-span-2 flex h-full min-h-0 w-full max-w-full flex-col self-stretch overflow-hidden !rounded-[16px]"
      >
        <div className="grid min-h-0 flex-1 grid-cols-2 content-start gap-[8px] auto-rows-min">
          {kpiItems.map((item) => (
            <KpiCard key={item.title} {...item} />
          ))}
        </div>
      </Card>

      <Card
        headerTitle="Today's tasks"
        className="md:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-2 box-border flex h-[148px] w-full max-w-full flex-col overflow-hidden !rounded-[16px]"
      >
        <div className="box-border flex h-[86px] w-full min-w-0 shrink-0 flex-row items-center gap-2 p-0">
          {taskItems.map((item, idx) => (
            <Fragment key={item.label}>
              {/* Figma: 1px rules after Overdue & after Pending Auto only — not between Manual ↔ Auto */}
              {(idx === 1 || idx === 3) && (
                <div className="w-px shrink-0 self-stretch bg-border" aria-hidden />
              )}
              <TaskCard {...item} onClick={() => navigate("/tasks")} />
            </Fragment>
          ))}
        </div>
      </Card>

      <div className="contents lg:col-span-3 lg:col-start-1 lg:row-start-3 lg:flex lg:w-full lg:max-w-full lg:flex-row lg:items-stretch lg:gap-2">
        <Card
          headerTitle="Signals"
          headerCounter={signals.length}
          className="md:col-span-2 box-border flex max-h-[60vh] w-full min-w-0 flex-col overflow-hidden lg:max-h-[412px] lg:h-[412px] lg:w-[800px] lg:max-w-[800px] lg:shrink-0"
        >
          <p className="mb-[4px] shrink-0 text-b2 text-gray">
            Never miss a single opportunity: check out your top signals from your 1st-degree
            LinkedIn connections.
          </p>
          <div className="-mx-[16px] flex min-h-0 min-w-0 flex-1 flex-col divide-y divide-border overflow-y-auto">
            {signals.map((signal) => (
              <SignalItem key={signal.id} signal={signal} onComplete={complete} onDelete={remove} />
            ))}
            {signals.length === 0 && (
              <p className="py-[24px] text-center text-sm text-gray">
                All signals handled, great work!
              </p>
            )}
          </div>
        </Card>

        <Card
          headerTitle="Onboarding"
          className="md:col-span-2 box-border flex w-full min-w-0 flex-col overflow-hidden lg:h-[412px] lg:w-[408px] lg:max-w-[408px] lg:shrink-0"
        >
          <div className="flex min-h-0 flex-1 flex-col divide-y divide-border overflow-y-auto">
            {onboardingItems.map((item) => (
              <OnboardingItem key={item.label} {...item} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
