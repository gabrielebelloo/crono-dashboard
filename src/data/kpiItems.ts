import type { KpiCardProps } from "../components/ui/KpiCard";
import { sidebarIcons } from "../components/layout/Sidebar/sidebarIcons";
import ContactsIcon from "../assets/kpi-icons/contacts.svg?react";
import CompaniesIcon from "../assets/kpi-icons/companies.svg?react";
import MeetingsIcon from "../assets/kpi-icons/meetings.svg?react";

export const kpiItems: KpiCardProps[] = [
  {
    title: "Contacts engaged",
    icon: ContactsIcon,
    color: "#3B85E8",
    current: 0,
    max: 500,
    tooltip: "Contacts who have at least one logged activity within the current month",
  },
  {
    title: "Companies engaged",
    icon: CompaniesIcon,
    color: "#3B58DB",
    current: 0,
    max: 500,
  },
  {
    title: "Activities",
    icon: sidebarIcons.tasks,
    color: "#8846DC",
    current: 1000,
    max: 2000,
  },
  {
    title: "Meetings",
    icon: MeetingsIcon,
    color: "#E2AD13",
    current: 20,
    max: 30,
  },
  {
    title: "Deals",
    icon: sidebarIcons.tasks,
    color: "#E769CB",
    current: 100,
    max: 200,
  },
  {
    title: "Pipeline",
    color: "#1A9D6E",
    current: 50000,
    max: 100000,
    prefix: "€",
    suffix: "K",
  },
];
