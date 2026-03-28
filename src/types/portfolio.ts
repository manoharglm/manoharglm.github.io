export interface PortfolioBody {
  about: string;
  contact?: string;
  contacHeader?: string;
  email?: string;
}

export interface PortfolioProfile {
  firstName: string;
  lastName: string;
  title: string;
}

export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack?: string[];
}

export interface PortfolioData {
  links: Record<string, string>;
  body: PortfolioBody;
  profile: PortfolioProfile;
  experiences: Experience[];
}
