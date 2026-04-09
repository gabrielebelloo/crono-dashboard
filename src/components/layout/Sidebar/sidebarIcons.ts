import AnalyticsIcon from "../../../assets/sidebar-icons/analytics.svg?react";
import DashboardIcon from "../../../assets/sidebar-icons/dashboard.svg?react";
import DealsIcon from "../../../assets/sidebar-icons/deals.svg?react";
import FindNewIcon from "../../../assets/sidebar-icons/find-new.svg?react";
import InboxIcon from "../../../assets/sidebar-icons/inbox.svg?react";
import ListsIcon from "../../../assets/sidebar-icons/lists.svg?react";
import SequencesIcon from "../../../assets/sidebar-icons/sequences.svg?react";
import TasksIcon from "../../../assets/sidebar-icons/tasks.svg?react";
import TemplatesIcon from "../../../assets/sidebar-icons/templates.svg?react";

export const sidebarIcons = {
  dashboard: DashboardIcon,
  findNew: FindNewIcon,
  lists: ListsIcon,
  templates: TemplatesIcon,
  sequences: SequencesIcon,
  tasks: TasksIcon,
  inbox: InboxIcon,
  deals: DealsIcon,
  analytics: AnalyticsIcon,
} as const;
