export interface Configuration {
  key: string;
  value: string;
}
export interface TeamMember {
  id: number;
  name: Record<string, string>;
  role: Record<string, string>;
  image: string;

}
export interface Demonstration {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  video_url: string;
}
export interface GetInTouch {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  image: string;
}
export interface Project {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  service_id: number;
  service?: Service;
  client: Record<string, string>;
  duration: Record<string, string>;
  year: number;
  featured: boolean;
  liveUrl: string | null;
  image: string;
}

export interface Section {
  id: number;
  title: Record<string, string>;
  content: Record<string, string>;
}
export interface Service {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  features: { description: Record<string, string> }[];
  popular: boolean;
  image: string;
}
export interface Setting {
  value: any;
  id: number;
  key: string;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  description: Record<string, string>;
  image: string;
}
export interface Stat {
  id: number;
  number: number;
  label: Record<string, string>;
}

export interface Testimonial {
  id: number;
  name: Record<string, string>;
  company: Record<string, string>;
  role: Record<string, string>;
  content: Record<string, string>;
  rating: number;
  image: string;
}

export interface HomeBanner {
  id: number;
  image: string;
  image480w: string;
  link: string | null;
  title: Record<string, string>;
  subtitle: Record<string, string>;
}

export interface SectionWithLastUpdated {
  data: Section[];
  last_updated?: string;
}
