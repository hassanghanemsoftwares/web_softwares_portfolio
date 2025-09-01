export type TeamMemberFormValues = {
  name: Record<string, string>;
  role: Record<string, string>;
  arrangement?: string;
  image: File | string | null;
  is_active?: boolean;
};

export type DemonstrationFormValues = {
  title: Record<string, string>;
  description: Record<string, string>;
  video_url: string;
};

export type GetInTouchFormValues = {
  title: Record<string, string>;
  description: Record<string, string>;
  image: File | string | null;
};

export type HomeBannerFormValues = {
  title: Record<string, string>;
  subtitle: Record<string, string>;
  arrangement?: string;
  image: File | string | null;
  image480w: File | string | null;
  link: string | null;
};

export type UserFormSubmitData = {
  name: string;
  email: string;
  password?: string;
  permissions: string[];
};

export interface ServiceFormValues {
  title: Record<string, string>;
  description: Record<string, string>;
  features:{ description: Record<string, string> }[];
  popular: boolean;
  arrangement: string;
  is_active: boolean;
  image: File | string | null;
}

export interface ProjectFormValues {
  title: Record<string, string>;
  description: Record<string, string>;
  client: Record<string, string>;
  duration: Record<string, string>;
  service_id: number;
  year: number;
  featured: boolean;
  liveUrl?: string | null;
  is_active: boolean;
  image: File | string | null;
}

export interface SectionFormValues {
  type: "faq" | "privacy" | "terms";
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface StatFormValues {
  number: number;
  label: Record<string, string>;
}

export interface TestimonialFormValues {
  name: Record<string, string>;
  rating: number;
   image?: File | string | null;
  is_active?: boolean;
  company: Record<string, string>;
  role: Record<string, string>;
  content: Record<string, string>;
}

export type SettingKey =
  | "get_in_touch"
  | "contact_us"
  | "our_work"
  | "featured_work"
  | "services"
  | "our_team"
  | "about_us"
  | "mission"
  | "vision";

export type SettingValue = {
  title?: Record<string, string>;
  subtitle?: Record<string, string>;
  description?: Record<string, string>;
};

export type SettingFormValues = {
  [K in SettingKey]?: SettingValue;
} & {
  [key: string]: SettingValue | undefined;
};

// export type SettingFormValues = {
//   get_in_touch?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
//   contact_us?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
//   our_work?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
//   featured_work?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
//   services?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
//   our_team?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
//   about_us?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
//   mission?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
//   vision?: {
//     title?: Record<string, string>;
//     subtitle?: Record<string, string>;
//     description?: Record<string, string>;
//   };
// };