import type { PortfolioData, Experience } from '../types/portfolio';

export const DATA_URL =
  'https://gist.githubusercontent.com/manoharglm/4de4f3cf91c4f90cc73b5776c6380c6d/raw/';

const uniqueStrings = (items: string[] = []) =>
  [...new Set(items.map((item) => item.trim()).filter(Boolean))];

const normalizeExperience = (experience: Experience): Experience => ({
  ...experience,
  description: uniqueStrings(experience.description),
  techStack: uniqueStrings(experience.techStack),
});

export async function getPortfolioData(): Promise<PortfolioData> {
  const response = await fetch(DATA_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch portfolio data: ${response.status}`);
  }

  const data = (await response.json()) as PortfolioData;

  return {
    ...data,
    experiences: (data.experiences ?? []).map(normalizeExperience),
  };
}
