import type { Project } from '@/app/content';
import type { Translations } from '@/app/i18n';
import { Arrow } from '../ui/arrow';

type ProjectWebsiteLinkProps = {
  project: Project;
  translations: Translations;
};

export function ProjectWebsiteLink({ project, translations }: ProjectWebsiteLinkProps) {
  const { label, unavailable } = translations.projectWebsite;
  const className = 'button outline project-website-link';

  if (!project.websiteUrl) {
    return (
      <button className={className} disabled title={unavailable} aria-label={`${project.name}: ${unavailable}`}>
        {label}<Arrow />
      </button>
    );
  }

  return (
    <a
      className={className}
      href={project.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${project.name}`}
    >
      {label}<Arrow />
    </a>
  );
}
