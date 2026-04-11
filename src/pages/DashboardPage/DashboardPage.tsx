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
    <div className="ml-0 mr-auto w-full min-w-0 max-w-full xl:max-w-[1216px]">
      <div className="w-full min-w-0 overflow-x-hidden">
        <div className="grid w-full min-w-0 auto-rows-min grid-cols-1 gap-2 md:grid-cols-[repeat(2,minmax(0,1fr))] xl:grid-cols-[33fr_33fr_34fr] artboard:grid-cols-[396px_396px_408px] xl:items-start">
          <Card className="md:col-span-1 xl:col-start-1 xl:row-start-1 box-border flex w-full min-w-0 flex-col gap-2 !p-0 !py-8 !pl-6 !pr-6 md:min-h-[142px] xl:h-[142px]">
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
            className="md:col-span-1 xl:col-start-2 xl:row-start-1 box-border flex h-auto min-h-0 w-full min-w-0 flex-col items-stretch overflow-hidden md:min-h-[142px] xl:h-[142px] artboard:!px-[15px]"
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
            className="md:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-span-2 xl:row-start-1 box-border flex w-full min-w-0 flex-col overflow-hidden md:min-h-[280px] xl:h-[293px] xl:min-h-[293px] xl:self-end"
          >
            <div className="grid min-h-0 min-w-0 w-full max-w-full flex-1 auto-rows-min grid-cols-1 content-start gap-2 sm:grid-cols-[repeat(2,minmax(0,1fr))]">
              {kpiItems.map((item) => (
                <KpiCard key={item.title} {...item} />
              ))}
            </div>
          </Card>

          <Card
            headerTitle="Today's tasks"
            className="md:col-span-2 xl:col-span-2 xl:col-start-1 xl:row-start-2 box-border flex h-auto min-h-0 w-full min-w-0 flex-col items-start overflow-hidden xl:h-[148px] xl:min-h-[148px] artboard:w-[800px] artboard:max-w-[800px] artboard:shrink-0"
          >
            <div className="box-border flex h-[86px] min-h-[86px] w-full min-w-0 shrink-0 items-stretch overflow-x-hidden overflow-y-hidden [-webkit-overflow-scrolling:touch] artboard:w-[768px] artboard:max-w-[768px]">
              {taskItems.map((item, idx) => (
                <Fragment key={item.label}>
                  <TaskCard
                    {...item}
                    onClick={() => navigate("/tasks")}
                    className="min-h-0 min-w-0 w-auto max-w-none shrink flex-1 basis-0 self-stretch"
                  />
                  {idx < taskItems.length - 1 &&
                    (idx === 1 ? (
                      <div className="h-[86px] w-[8px] shrink-0" aria-hidden />
                    ) : (
                      <>
                        <div className="h-[86px] w-[6.5px] shrink-0" aria-hidden />
                        <div className="h-[86px] w-px shrink-0 bg-border" aria-hidden />
                        <div className="h-[86px] w-[6.5px] shrink-0" aria-hidden />
                      </>
                    ))}
                </Fragment>
              ))}
            </div>
          </Card>

          <div className="contents xl:col-span-3 xl:row-start-3 xl:grid xl:min-w-0 xl:w-full xl:grid-cols-subgrid">
            <Card
              headerTitle="Signals"
              headerCounter={signals.length}
              subheader={
                <p className="min-w-0 text-b2 text-gray">
                  Never miss a single opportunity: check out your top signals from your 1st-degree
                  LinkedIn connections.
                </p>
              }
              className="md:col-span-2 box-border flex w-full min-w-0 flex-col gap-[12px] overflow-hidden max-xl:max-h-[min(60vh,520px)] max-xl:flex-1 xl:col-span-2 xl:col-start-1 xl:h-[412px] xl:min-h-[412px] xl:max-h-[412px] xl:self-start xl:!p-0 xl:!pb-0 xl:!pt-4"
            >
              <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-y-auto pb-4 pr-1">
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
              className="md:col-span-2 box-border flex w-full min-w-0 flex-col overflow-hidden max-xl:max-h-[min(60vh,520px)] max-xl:flex-1 xl:col-span-1 xl:col-start-3 xl:h-[412px] xl:min-h-[412px] xl:max-h-[412px] xl:self-start"
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
    </div>
  );
}
