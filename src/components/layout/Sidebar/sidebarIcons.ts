import AnalyticsIcon from "../../../assets/icons/analytics.svg?react";
import DashboardIcon from "../../../assets/icons/dashboard.svg?react";
import DealsIcon from "../../../assets/icons/deals.svg?react";
import FindNewIcon from "../../../assets/icons/find-new.svg?react";
import InboxIcon from "../../../assets/icons/inbox.svg?react";
import ListsIcon from "../../../assets/icons/lists.svg?react";
import SequencesIcon from "../../../assets/icons/sequences.svg?react";
import TasksIcon from "../../../assets/icons/tasks.svg?react";
import TemplatesIcon from "../../../assets/icons/templates.svg?react";

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
