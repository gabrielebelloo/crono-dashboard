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
    <div className="mx-auto w-full min-w-0 max-w-full xl:max-w-[1216px]">
      <div className="grid w-full min-w-0 auto-rows-min grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 xl:grid-cols-[396px_396px_408px] xl:gap-x-2 xl:gap-y-2 xl:items-start">
        <Card className="md:col-span-1 xl:col-start-1 xl:row-start-1 box-border flex w-full max-w-full flex-col gap-2 !p-0 !py-8 !pl-6 !pr-6 md:min-h-[142px] xl:h-[142px] xl:w-[396px] xl:max-w-[396px] xl:shrink-0">
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
          className="md:col-span-1 xl:col-start-2 xl:row-start-1 box-border flex h-auto min-h-0 w-full max-w-full flex-col items-stretch overflow-hidden md:min-h-[142px] xl:h-[142px] xl:w-[396px] xl:max-w-[396px] xl:shrink-0"
        >
          <div className="flex min-h-[80px] w-full min-w-0 max-w-full shrink-0 flex-row items-center gap-2 overflow-x-auto overflow-y-hidden rounded-[12px] bg-light py-4 pl-4 pr-4 sm:gap-3 sm:py-4 sm:pl-4 sm:pr-6 md:h-[80px] md:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[24px] bg-hover p-3">
              <sidebarIcons.inbox className="h-6 w-6 shrink-0 text-secondary" />
            </div>
            <div className="shrink-0 text-[36px] font-medium leading-[44px] text-grayHover1">
              24
            </div>
            <div className="flex min-w-0 flex-1 justify-end">
              <div className="-space-x-2 flex shrink-0 items-center">
                {[RedditLogo, AmazonLogo, McLogo, MediumLogo].map((Logo, idx) => (
                  <div
                    key={idx}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-2xl ${
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
          className="md:col-span-2 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:mt-[5px] box-border flex w-full min-w-0 max-w-full flex-col overflow-hidden md:min-h-[280px] xl:h-[293px] xl:w-[408px] xl:max-w-[408px] xl:min-h-[293px] xl:self-start xl:justify-self-stretch"
        >
          <div className="grid min-h-0 min-w-0 w-full max-w-full flex-1 grid-cols-2 content-start gap-2 auto-rows-min">
            {kpiItems.map((item) => (
              <KpiCard key={item.title} {...item} />
            ))}
          </div>
        </Card>

        <Card
          headerTitle="Today's tasks"
          className="md:col-span-2 xl:col-span-2 xl:col-start-1 xl:row-start-2 box-border flex h-auto min-h-0 w-full max-w-full flex-col items-start overflow-hidden xl:h-[148px] xl:min-h-[148px] xl:w-[800px] xl:max-w-[800px] xl:shrink-0"
        >
          <div className="box-border flex min-h-[86px] w-full min-w-0 shrink-0 flex-row items-center gap-2 overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch] xl:grid xl:h-[86px] xl:w-[768px] xl:max-w-[768px] xl:grid-cols-[181.5px_1px_181.5px_1px_181.5px_1px_181.5px] xl:gap-0 xl:gap-x-[6.5px] xl:overflow-x-hidden">
            {taskItems.map((item, idx) => (
              <Fragment key={item.label}>
                <TaskCard {...item} onClick={() => navigate("/tasks")} />
                {idx < taskItems.length - 1 && (
                  <div className="h-[86px] w-px shrink-0 bg-border" aria-hidden />
                )}
              </Fragment>
            ))}
          </div>
        </Card>

        <div className="contents xl:col-span-3 xl:row-start-3 xl:flex xl:min-h-0 xl:min-w-0 xl:w-full xl:max-w-full xl:flex-row xl:items-stretch xl:gap-2">
          <Card
            headerTitle="Signals"
            headerCounter={signals.length}
            subheader={
              <p className="min-w-0 text-b2 text-gray">
                Never miss a single opportunity: check out your top signals from your 1st-degree
                LinkedIn connections.
              </p>
            }
            className="md:col-span-2 box-border flex w-full min-w-0 flex-col gap-[12px] overflow-hidden max-xl:max-h-[min(60vh,520px)] max-xl:flex-1 xl:h-[412px] xl:min-h-[412px] xl:max-h-[412px] xl:max-w-[800px] xl:min-w-0 xl:flex-1 xl:!p-0 xl:!pb-0 xl:!pt-4"
          >
            <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-y-auto pr-1">
              {signals.map((signal, idx) => (
                <Fragment key={signal.id}>
                  <SignalItem signal={signal} onComplete={complete} onDelete={remove} />
                  {idx < signals.length - 1 && (
                    <div className="h-px w-full min-w-0 shrink-0 bg-border" aria-hidden />
                  )}
                </Fragment>
              ))}
              {signals.length === 0 && (
                <p className="px-4 py-6 text-center text-b2 text-gray">
                  All signals handled, great work!
                </p>
              )}
            </div>
          </Card>

          <Card
            headerTitle="Onboarding"
            className="md:col-span-2 box-border flex w-full min-w-0 flex-col overflow-hidden max-xl:max-h-[min(60vh,520px)] max-xl:flex-1 xl:h-[412px] xl:min-h-[412px] xl:max-h-[412px] xl:w-[408px] xl:max-w-[408px] xl:shrink-0"
          >
            <div className="flex min-h-0 min-w-0 w-full flex-1 flex-col items-stretch gap-4 overflow-y-auto pr-1">
              {onboardingItems.map((item, idx) => (
                <Fragment key={item.label}>
                  <OnboardingItem {...item} />
                  {idx < onboardingItems.length - 1 && (
                    <div className="h-px w-full min-w-0 shrink-0 bg-border" aria-hidden />
                  )}
                </Fragment>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
