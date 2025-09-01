import {
  Configuration,
  Demonstration,
  GetInTouch,
  HomeBanner,
  Project,
  SectionWithLastUpdated,
  Service,
  Setting,
  Stat,
  TeamMember,
  Testimonial,
} from "./api.interfaces";


export interface ApiResponse {
  result: boolean;
  message: string;
}
export interface HomeResponse {
  result: boolean;
  message: string;
  configurations: Configuration[];
  demonstrations: Demonstration[];
  get_in_touches: GetInTouch[];
  home_banners: HomeBanner[];
  projects: Project[];
  faqs: SectionWithLastUpdated;
  privacies: SectionWithLastUpdated;
  terms: SectionWithLastUpdated;
  services: Service[];
  setting: Setting[];
  stats: Stat[];
  team_members: TeamMember[];
  testimonials: Testimonial[];
}
