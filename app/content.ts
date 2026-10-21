import { content, type Locale } from './i18n';
export { content, type Locale } from './i18n';
export type Project = { name: string; company: string; kind: 'web' | 'mobile' | 'fullstack'; year: string; tags: string[]; title: string; description: string; detail: string; visual: string };
const projectsBase = [
  { company: 'Emanu', kind: 'fullstack' as const, year: '2025 — 2026', visual: 'emanu' },
  { company: 'Doji', kind: 'web' as const, year: '2025 — 2026', visual: 'doji' },
  { company: 'Doji', kind: 'mobile' as const, year: '2025 — 2026', visual: 'device' },
  { company: 'iFood', kind: 'web' as const, year: '2022 — 2025', visual: 'ifood' },
  { company: 'Hurb', kind: 'web' as const, year: '2022 — 2023', visual: 'hurb' },
  { company: 'Lexos', kind: 'web' as const, year: '2021 — 2022', visual: 'lexos' },
];
const experienceBase = [
  ['2025 — 2026', 'Emanu', 'React · Next.js · React Native · Node.js'],
  ['2025 — 2026', 'Doji', 'Next.js · React Native · TypeScript'],
  ['2022 — 2025', 'iFood', 'React · TypeScript · Jest · Cypress'],
  ['2023', 'Gama Academy', 'HTML · CSS · JavaScript · React'],
  ['2022 — 2023', 'Hurb', 'Next.js · TypeScript · Tailwind CSS'],
  ['2020 — 2022', 'Wiz Soluções', 'Angular · React · Karma · Jasmine'],
  ['2021 — 2022', 'Lexos', 'Angular · Vue.js · Syncfusion'],
  ['2021', 'SmartPerformance', 'Angular · Figma · Scrum'],
  ['2020 — 2021', 'Bilin Technology', 'JavaScript · React · Figma'],
  ['2019 — 2020', 'FNDE', 'HTML · CSS · JavaScript'],
];

export function getProjects(locale: Locale): Project[] {
 const t = content[locale];
 return projectsBase.map((project, index) => ({
  ...project,
  name: t.projectNames[index],
  tags: t.projectTags[index],
  title: t.projectCopy[index][0],
  description: t.projectCopy[index][1],
  detail: t.projectCopy[index][2],
 }));
}
export function getExperience(locale: Locale) {
 const t = content[locale];
 return experienceBase.map(([date, company, stack], index) => ({date, company, stack, role: t.roles[index], description: t.experienceCopy[index]}));
}
