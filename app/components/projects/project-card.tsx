'use client';

import type { Project } from '@/app/content';
import { useReveal } from '@/app/hooks/use-reveal';
import { useTranslations } from '@/app/providers/locale-provider';
import { Arrow } from '../ui/arrow';
import { TagList } from '../ui/tag-list';
import { ProjectVisual } from './project-visual';
import { ProjectWebsiteLink } from './project-website-link';

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { translations: t } = useTranslations();
  const ref = useReveal<HTMLElement>();

  return (
    <article ref={ref} className="project reveal">
      <button
        className="project-image-button"
        onClick={() => onSelect(project)}
        aria-label={`${t.view}: ${project.name}`}
      >
        <ProjectVisual project={project} translations={t} />
        <span className="project-image-arrow"><Arrow /></span>
      </button>
      <div className="project-meta">
        <span>{project.company} / {t.projectKinds[project.kind]}</span>
        {project.year && <span>{project.year}</span>}
      </div>
      <button className="project-title" onClick={() => onSelect(project)}>
        <h3>{project.name}</h3>
        <Arrow />
      </button>
      <p className="project-description">{project.description}</p>
      <TagList tags={project.tags} />
      {project.websiteUrl && (
        <ProjectWebsiteLink project={project} translations={t} />
      )}
    </article>
  );
}
