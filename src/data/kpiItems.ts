import type { KpiCardProps } from "../components/ui/KpiCard";
import { sidebarIcons } from "../components/layout/Sidebar/sidebarIcons";
import ContactsIcon from "../assets/kpi-icons/contacts.svg?react";
import CompaniesIcon from "../assets/kpi-icons/companies.svg?react";
import MeetingsIcon from "../assets/kpi-icons/meetings.svg?react";
import DealsKpiIcon from "../assets/kpi-icons/deals.svg?react";

export const kpiItems: KpiCardProps[] = [
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
    icon: DealsKpiIcon,
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
