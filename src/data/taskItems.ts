import type { TaskCardProps } from "../components/ui/TaskCard";

export const taskItems: TaskCardProps[] = [
  {
    label: "Overdue",
    count: 3,
    colorClass: "text-red-400",
    bgClass: "bg-red-100",
  },
  {
    label: "Pending Manual",
    count: 10,
    colorClass: "text-amber-400",
    bgClass: "bg-amber-100",
  },
  {
    label: "Pending Auto",
    count: 20,
    colorClass: "text-blue-400",
    bgClass: "bg-blue-100",
    errorCount: 1,
  },
  {
    label: "Completed",
    count: 8,
    colorClass: "text-emerald-500",
    bgClass: "bg-green-100",
  },
];
