import type { TaskCardProps } from "../components/ui/TaskCard";

export const taskItems: TaskCardProps[] = [
  {
    label: "Overdue",
    count: 3,
    variant: "overdue",
  },
  {
    label: "Pending Manual",
    count: 10,
    variant: "pendingManual",
  },
  {
    label: "Pending Auto",
    count: 20,
    variant: "pendingAuto",
    errorCount: 1,
  },
  {
    label: "Completed",
    count: 8,
    variant: "completed",
  },
];
