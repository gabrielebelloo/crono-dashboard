import type { Signal } from "../types/signal";
import AmazonLogo from "../assets/amazon-logo.svg?react";
import MediumLogo from "../assets/medium-logo.svg?react";
import McLogo from "../assets/mc-logo.svg?react";

export const initialSignals: Signal[] = [
  {
    id: "sig-1",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Robert Smith", bold: true },
      { text: " changed role from SDR to Senior SDR at WeRoad" },
    ],
    tags: [{ label: "Role change", colorClass: "text-[#8846DC]" }],
    inSequence: true,
    date: "Apr 2, 2025",
  },
  {
    id: "sig-2",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Robert Smith", bold: true },
      { text: " changed role from SDR to Senior SDR at WeRoad" },
    ],
    tags: [{ label: "Company change", colorClass: "text-[#3B85E8]" }],
    inSequence: true,
    date: "Apr 2, 2025",
  },
  {
    id: "sig-3",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Robert Smith", bold: true },
      { text: " changed role from SDR to Senior SDR at WeRoad" },
    ],
    tags: [{ label: "Role change", colorClass: "text-[#8846DC]" }],
    date: "Apr 2, 2025",
  },
  {
    id: "sig-4",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Amazon", bold: true },
      { text: " viewed " },
      { text: "2 pages", highlight: true },
      { text: " of your website for 65 sec" },
    ],
    tags: [{ label: "Website view", colorClass: "text-[#E769CB]" }],
    date: "Apr 2, 2025",
  },
  {
    id: "sig-5",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Amazon", bold: true },
      { text: " viewed " },
      { text: "2 pages", highlight: true },
      { text: " of your website for 65 sec" },
    ],
    tags: [{ label: "Website view", colorClass: "text-[#E769CB]" }],
    date: "Apr 2, 2025",
  },
  {
    id: "sig-6",
    avatar: { type: "initials", initials: "MF", bgClass: "bg-amber-500" },
    description: [
      { text: "Marco Ferrari", bold: true },
      { text: " joined " },
      { text: "Stripe", bold: true },
      { text: " as " },
      { text: "Head of Sales", bold: true },
    ],
    tags: [{ label: "Company change", colorClass: "text-[#3B85E8]" }],
    date: "Mar 29, 2025",
  },
  {
    id: "sig-7",
    avatar: { type: "logo", logo: MediumLogo, bgClass: "bg-black" },
    description: [
      { text: "Medium", bold: true },
      { text: " viewed " },
      { text: "2 pages", highlight: true },
      { text: " of your website for 45 sec" },
    ],
    tags: [{ label: "Website view", colorClass: "text-[#E769CB]" }],
    date: "Mar 28, 2025",
  },
  {
    id: "sig-8",
    avatar: { type: "logo", logo: McLogo, bgClass: "bg-[#DA291C]" },
    description: [
      { text: "McDonald's", bold: true },
      { text: " viewed " },
      { text: "4 pages", highlight: true },
      { text: " of your website for 90 sec" },
    ],
    tags: [{ label: "Website view", colorClass: "text-[#E769CB]" }],
    date: "Mar 27, 2025",
  },
  {
    id: "sig-9",
    avatar: { type: "initials", initials: "SJ", bgClass: "bg-blue-500" },
    description: [
      { text: "Sarah Johnson", bold: true },
      { text: " was promoted to " },
      { text: "VP of Sales", bold: true },
      { text: " at TechCorp" },
    ],
    tags: [{ label: "Role change", colorClass: "text-[#8846DC]" }],
    inSequence: true,
    date: "Mar 26, 2025",
  },
  {
    id: "sig-10",
    avatar: { type: "initials", initials: "AK", bgClass: "bg-emerald-500" },
    description: [
      { text: "Alex Kim", bold: true },
      { text: " moved from " },
      { text: "Google", bold: true },
      { text: " to " },
      { text: "OpenAI", bold: true },
      { text: " as Sales Director" },
    ],
    tags: [{ label: "Company change", colorClass: "text-[#3B85E8]" }],
    date: "Mar 25, 2025",
  },
  {
    id: "sig-11",
    avatar: { type: "initials", initials: "PD", bgClass: "bg-violet-500" },
    description: [
      { text: "Paolo De Luca", bold: true },
      { text: " changed role from " },
      { text: "BDR", bold: true },
      { text: " to " },
      { text: "Account Executive", bold: true },
      { text: " at Notion" },
    ],
    tags: [{ label: "Role change", colorClass: "text-[#8846DC]" }],
    inSequence: true,
    date: "Mar 24, 2025",
  },
  {
    id: "sig-12",
    avatar: { type: "initials", initials: "EV", bgClass: "bg-rose-500" },
    description: [
      { text: "Elena Vasquez", bold: true },
      { text: " joined " },
      { text: "Linear", bold: true },
      { text: " as " },
      { text: "Enterprise Sales Manager", bold: true },
    ],
    tags: [{ label: "Company change", colorClass: "text-[#3B85E8]" }],
    date: "Mar 23, 2025",
  },
];
