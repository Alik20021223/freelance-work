import { BadgePropStatus, BadgePropView } from "@consta/uikit/Badge";

export type filterItems = {
  label: string;
  id: number;
};

export type Badge = {
  text: string;
  color: BadgePropStatus;
  form?: BadgePropView;
};

export type Client = {
  checkbox?: string;
  id: string;
  name: string;
  phone: string;
  email: string;
  segments: Badge[];
};


