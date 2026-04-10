import type { Signal } from "../types/signal";
import AmazonLogo from "../assets/logos/amazon-logo.svg?react";
import MediumLogo from "../assets/logos/medium-logo.svg?react";
import McLogo from "../assets/logos/mc-logo.svg?react";

export const initialSignals: Signal[] = [
  {
    id: "sig-1",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Robert Smith" },
      { text: " changed role from SDR to Senior SDR at WeRoad" },
    ],
    tags: [{ label: "Role change", colorClass: "text-signalPurple" }],
    inSequence: true,
    date: "Apr 2, 2025",
  },
  {
    id: "sig-2",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Robert Smith" },
      { text: " changed role from SDR to Senior SDR at WeRoad" },
    ],
    tags: [{ label: "Company change", colorClass: "text-stackBlue" }],
    inSequence: true,
    date: "Apr 2, 2025",
  },
  {
    id: "sig-3",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Robert Smith" },
      { text: " changed role from SDR to Senior SDR at WeRoad" },
    ],
    tags: [{ label: "Role change", colorClass: "text-signalPurple" }],
    date: "Apr 2, 2025",
  },
  {
    id: "sig-4",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Amazon" },
      { text: " viewed " },
      { text: "2 pages", highlight: true },
      { text: " of your website for 65 sec" },
    ],
    tags: [{ label: "Website view", colorClass: "text-signalPink" }],
    date: "Apr 2, 2025",
  },
  {
    id: "sig-5",
    avatar: { type: "logo", logo: AmazonLogo, bgClass: "bg-[#232F3F]" },
    description: [
      { text: "Amazon" },
      { text: " viewed " },
      { text: "2 pages", highlight: true },
      { text: " of your website for 65 sec" },
    ],
    tags: [{ label: "Website view", colorClass: "text-signalPink" }],
    date: "Apr 2, 2025",
  },
  {
    id: "sig-6",
    avatar: { type: "initials", initials: "MF", bgClass: "bg-amber-500" },
    description: [
      { text: "Marco Ferrari" },
      { text: " joined " },
      { text: "Stripe" },
      { text: " as " },
      { text: "Head of Sales" },
    ],
    tags: [{ label: "Company change", colorClass: "text-stackBlue" }],
    date: "Mar 29, 2025",
  },
  {
    id: "sig-7",
    avatar: { type: "logo", logo: MediumLogo, bgClass: "bg-black" },
    description: [
      { text: "Medium" },
      { text: " viewed " },
      { text: "2 pages", highlight: true },
      { text: " of your website for 45 sec" },
    ],
    tags: [{ label: "Website view", colorClass: "text-signalPink" }],
    date: "Mar 28, 2025",
  },
  {
    id: "sig-8",
    avatar: { type: "logo", logo: McLogo, bgClass: "bg-[#DA291C]" },
    description: [
      { text: "McDonald's" },
      { text: " viewed " },
      { text: "4 pages", highlight: true },
      { text: " of your website for 90 sec" },
    ],
    tags: [{ label: "Website view", colorClass: "text-signalPink" }],
    date: "Mar 27, 2025",
  },
  {
    id: "sig-9",
    avatar: { type: "initials", initials: "SJ", bgClass: "bg-blue-500" },
    description: [
      { text: "Sarah Johnson" },
      { text: " was promoted to " },
      { text: "VP of Sales" },
      { text: " at TechCorp" },
    ],
    tags: [{ label: "Role change", colorClass: "text-signalPurple" }],
    inSequence: true,
    date: "Mar 26, 2025",
  },
  {
    id: "sig-10",
    avatar: { type: "initials", initials: "AK", bgClass: "bg-emerald-500" },
    description: [
      { text: "Alex Kim" },
      { text: " moved from " },
      { text: "Google" },
      { text: " to " },
      { text: "OpenAI" },
      { text: " as Sales Director" },
    ],
    tags: [{ label: "Company change", colorClass: "text-stackBlue" }],
    date: "Mar 25, 2025",
  },
  {
    id: "sig-11",
    avatar: { type: "initials", initials: "PD", bgClass: "bg-violet-500" },
    description: [
      { text: "Paolo De Luca" },
      { text: " changed role from " },
      { text: "BDR" },
      { text: " to " },
      { text: "Account Executive" },
      { text: " at Notion" },
    ],
    tags: [{ label: "Role change", colorClass: "text-signalPurple" }],
    inSequence: true,
    date: "Mar 24, 2025",
  },
  {
    id: "sig-12",
    avatar: { type: "initials", initials: "EV", bgClass: "bg-rose-500" },
    description: [
      { text: "Elena Vasquez" },
      { text: " joined " },
      { text: "Linear" },
      { text: " as " },
      { text: "Enterprise Sales Manager" },
    ],
    tags: [{ label: "Company change", colorClass: "text-stackBlue" }],
    date: "Mar 23, 2025",
  },
];
