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
    <div className="w-full min-w-0 max-w-[1216px]">
      <div className="grid w-full min-w-0 max-w-full auto-rows-min grid-cols-1 gap-2 sm:gap-2 md:grid-cols-2 xl:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)_minmax(240px,min(408px,100%))] min-[1360px]:[grid-template-columns:minmax(260px,1fr)_minmax(260px,1fr)_minmax(0,min(408px,100%))]">
        <Card className="md:col-span-1 xl:col-start-1 xl:row-start-1 box-border min-w-0 w-full max-w-full gap-[8px] px-6 py-6 md:min-h-[142px] md:px-8 xl:min-h-[142px] xl:!px-[32px] xl:!py-[24px]">
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
          className="md:col-span-1 xl:col-start-2 xl:row-start-1 box-border flex min-h-[142px] min-w-0 w-full max-w-full flex-col items-stretch overflow-hidden !rounded-[16px] xl:min-h-[142px]"
        >
          <div className="flex min-h-[80px] w-full min-w-0 max-w-full shrink-0 flex-row items-center gap-2 overflow-x-auto overflow-y-hidden rounded-[12px] bg-light py-4 pl-4 pr-4 sm:gap-3 sm:py-[16px] sm:pl-[16px] sm:pr-[24px] md:h-[80px] md:gap-[16px]">
            <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[24px] bg-hover p-[12px]">
              <sidebarIcons.inbox className="h-[24px] w-[24px] shrink-0 text-secondary" />
            </div>
            <div className="shrink-0 text-[36px] font-medium leading-[44px] text-grayHover1">
              24
            </div>
            <div className="flex min-w-0 flex-1 justify-end">
              <div className="-space-x-[8px] flex shrink-0 items-center">
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
          className="md:col-span-2 xl:col-start-3 xl:row-start-1 xl:row-span-2 flex min-h-[280px] w-full min-w-0 max-w-full flex-col self-stretch overflow-hidden !rounded-[16px] xl:h-full xl:min-h-0 xl:max-w-[min(408px,100%)] xl:justify-self-stretch"
        >
          <div className="grid min-h-0 min-w-0 w-full max-w-full flex-1 grid-cols-2 content-start gap-[8px] auto-rows-min">
            {kpiItems.map((item) => (
              <KpiCard key={item.title} {...item} />
            ))}
          </div>
        </Card>

        <Card
          headerTitle="Today's tasks"
          className="md:col-span-2 xl:col-span-2 xl:col-start-1 xl:row-start-2 box-border flex min-h-0 min-w-0 w-full max-w-full flex-col overflow-hidden !rounded-[16px] md:min-h-[148px]"
        >
          <div className="box-border flex min-h-[86px] w-full min-w-0 shrink-0 flex-row items-stretch gap-2 overflow-x-auto overflow-y-hidden p-0 [-webkit-overflow-scrolling:touch] md:h-[86px] md:overflow-x-visible">
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

        <div className="contents xl:col-span-3 xl:col-start-1 xl:row-start-3 xl:flex xl:min-h-0 xl:min-w-0 xl:w-full xl:max-w-full xl:flex-row xl:items-stretch xl:gap-2">
          <Card
            headerTitle="Signals"
            headerCounter={signals.length}
            subheader={
              <p className="min-w-0 text-b2 text-gray">
                Never miss a single opportunity: check out your top signals from your 1st-degree
                LinkedIn connections.
              </p>
            }
            className="md:col-span-2 box-border flex max-h-[min(60vh,520px)] w-full min-w-0 flex-col gap-3 overflow-hidden !rounded-[16px] !p-0 !pb-0 !pt-4 max-xl:flex-1 xl:max-h-[min(412px,70vh)] xl:min-h-[280px] xl:min-w-0 xl:flex-1 xl:basis-0 2xl:max-h-[412px]"
          >
            <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-y-auto pr-1">
              {signals.map((signal, idx) => (
                <SignalItem
                  key={signal.id}
                  signal={signal}
                  onComplete={complete}
                  onDelete={remove}
                  showDivider={idx < signals.length - 1}
                />
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
            className="md:col-span-2 box-border flex max-h-[min(60vh,520px)] w-full min-w-0 flex-col overflow-hidden !rounded-[16px] max-xl:flex-1 xl:max-h-[min(412px,70vh)] xl:min-h-[240px] xl:min-w-0 xl:w-full xl:max-w-[408px] xl:shrink xl:grow-0 2xl:max-h-[412px]"
          >
            <div className="mt-1 flex min-h-0 min-w-0 w-full flex-1 flex-col items-stretch gap-4 overflow-y-auto">
              {onboardingItems.map((item, idx) => (
                <Fragment key={item.label}>
                  <OnboardingItem {...item} />
                  {idx < onboardingItems.length - 1 && (
                    <div className="h-px w-full shrink-0 bg-border" aria-hidden />
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
