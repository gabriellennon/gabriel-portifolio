import { content, type Locale } from './i18n';

export type ProjectMedia =
  | { type: 'image'; src: string }
  | { type: 'illustration'; id: 'hurb' };

const projectDefinitions = [
  {
    id: 'emanu', company: "Emanu", kind: 'fullstack', year: "2025 — 2026",
    websiteUrl: "https://www.emanuapp.com/",
    media: { type: 'image', src: '/images/projects/emanu.png' },
  },
  {
    id: 'doji', company: "Doji", kind: 'web', year: "2025 — 2026",
    websiteUrl: "https://tradein.doji.com.br/login",
    media: { type: 'image', src: '/images/projects/dojitradein.png' },
  },
  {
    id: 'device', company: "Doji", kind: 'mobile', year: "2025 — 2026",
    websiteUrl: "https://apps.apple.com/br/app/dojicheck/id6763075570",
    media: { type: 'image', src: '/images/projects/dojicheck.png' },
  },
  {
    id: 'ifood', company: "iFood", kind: 'web', year: "2022 — 2025",
    websiteUrl: "https://www.ifood.com.br/",
    media: { type: 'image', src: '/images/projects/ifood.png' },
  },
  {
    id: 'hurb', company: "Hurb", kind: 'web', year: "2022 — 2023",
    websiteUrl: null,
    media: { type: 'image', src: '/images/projects/hurb.png' },
  },
  {
    id: 'lexos', company: "Lexos", kind: 'web', year: "2021 — 2022",
    websiteUrl: "https://www.lexos.com.br/hub/",
    media: { type: 'image', src: '/images/projects/lexos.png' },
  },
  {
    id: 'vendergas', company: "Vender Gás", kind: 'web', year: null,
    websiteUrl: "https://vendergas.com.br/",
    media: { type: 'image', src: '/images/projects/vendergas.png' },
  },
  {
    id: 'smart-performance', company: "SmartPerformance", kind: 'web', year: "2021",
    websiteUrl: "https://smartperformance.com.br/",
    media: { type: 'image', src: '/images/projects/smartperformance.png' },
  },
  {
    id: 'wiz', company: "Wiz", kind: 'web', year: "2020 — 2022",
    websiteUrl: "https://www.wiz.co/",
    media: { type: 'image', src: '/images/projects/wiz.png' },
  },
  {
    id: 'beerpass', company: "BeerPass", kind: 'mobile', year: null,
    websiteUrl: "https://apps.apple.com/br/app/beerpass-club/id1605400165",
    media: { type: 'image', src: '/images/projects/beerpass.png' },
  },
  {
    id: 'dayworktools', company: "Day Work Tools", kind: 'web', year: null,
    websiteUrl: "https://dayworktools.fun/",
    media: { type: 'image', src: '/images/projects/dayworktools.png' },
  },
  {
    id: 'seven', company: "Seven Global", kind: 'web', year: null,
    websiteUrl: "https://sevenglobaledu.com/",
    media: { type: 'image', src: '/images/projects/seven.png' },
  },
  {
    id: 'lalale', company: "Lalale Group", kind: 'web', year: null,
    websiteUrl: "https://lalalegroup.com",
    media: { type: 'image', src: '/images/projects/lalale.png' },
  },
] as const;

export type ProjectId = (typeof projectDefinitions)[number]['id'];
export type ProjectKind = (typeof projectDefinitions)[number]['kind'];
export type ProjectFilter = 'all' | ProjectKind;
export const projectFilters: readonly ProjectFilter[] = ['all', 'web', 'mobile', 'fullstack'];

export type Project = {
  id: ProjectId;
  company: string;
  kind: ProjectKind;
  year: string | null;
  media: ProjectMedia;
  websiteUrl: string | null;
  name: string;
  tags: string[];
  title: string;
  description: string;
  detail: string;
};

const experienceDefinitions = [
  { id: 'emanu', date: '2025 — 2026', company: 'Emanu', stack: 'React · Next.js · React Native · Node.js' },
  { id: 'doji', date: '2025 — 2026', company: 'Doji', stack: 'Next.js · React Native · TypeScript' },
  { id: 'ifood', date: '2022 — 2025', company: 'iFood', stack: 'React · TypeScript · Jest · Cypress' },
  { id: 'gama', date: '2023', company: 'Gama Academy', stack: 'HTML · CSS · JavaScript · React' },
  { id: 'hurb', date: '2022 — 2023', company: 'Hurb', stack: 'Next.js · TypeScript · Tailwind CSS' },
  { id: 'wiz', date: '2020 — 2022', company: 'Wiz Soluções', stack: 'Angular · React · Karma · Jasmine' },
  { id: 'lexos', date: '2021 — 2022', company: 'Lexos', stack: 'Angular · Vue.js · Syncfusion' },
  { id: 'smart-performance', date: '2021', company: 'SmartPerformance', stack: 'Angular · Figma · Scrum' },
  { id: 'bilin', date: '2020 — 2021', company: 'Bilin Technology', stack: 'JavaScript · React · Figma' },
  { id: 'fnde', date: '2019 — 2020', company: 'FNDE', stack: 'HTML · CSS · JavaScript' },
] as const;

/** Join factual records with localized copy by stable identifiers, never array positions. */
export function getProjects(locale: Locale): Project[] {
  return projectDefinitions.map(project => ({ ...project, ...content[locale].projects[project.id] }));
}

export function getExperience(locale: Locale) {
  return experienceDefinitions.map(experience => ({ ...experience, ...content[locale].experience[experience.id] }));
}

export function filterProjects(projects: readonly Project[], filter: ProjectFilter) {
  return filter === 'all' ? [...projects] : projects.filter(project => project.kind === filter);
}
