import type { sidebarIcons } from "../components/layout/Sidebar/sidebarIcons";

export type SidebarItemType = {
  id: keyof typeof sidebarIcons;
  label: string;
  href: string;
  counter?: number;
  isExpandable?: boolean;
};
