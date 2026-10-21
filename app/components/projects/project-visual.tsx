import Image from 'next/image';
import type { Project } from '@/app/content';
import type { Translations } from '@/app/i18n';
import { TravelIllustration } from './project-illustrations';

type ProjectVisualProps = {
  project: Project;
  translations: Translations;
  sizes?: string;
};

export function ProjectVisual({
  project,
  translations,
  sizes = '(max-width: 760px) 50vw, (max-width: 1352px) 33vw, 400px',
}: ProjectVisualProps) {
  if (project.media.type === 'image') {
    return (
      <div className="project-visual project-screenshot" aria-hidden="true">
        <Image src={project.media.src} alt="" fill sizes={sizes} className="project-screenshot-image" />
      </div>
    );
  }

  return (
    <div className={`project-visual visual-${project.media.id}`} aria-hidden="true">
      <TravelIllustration copy={translations.visual} />
      <span className="visual-caption">{translations.illustration}</span>
    </div>
  );
}
