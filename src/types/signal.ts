export type DescriptionPart = {
  text: string;
  /** Renders in teal (--main-color) */
  highlight?: boolean;
};

export type SignalTag = {
  label: string;
  colorClass: string;
};

export type SignalAvatar =
  | {
      type: "logo";
      logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
      bgClass: string;
    }
  | {
      type: "initials";
      initials: string;
      bgClass: string;
    };

export type Signal = {
  id: string;
  avatar: SignalAvatar;
  description: DescriptionPart[];
  tags: SignalTag[];
  inSequence?: boolean;
  date: string;
};
