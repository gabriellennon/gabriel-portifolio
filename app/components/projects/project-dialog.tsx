'use client';

import { useEffect, useRef } from 'react';
import type { Project } from '@/app/content';
import { useTranslations } from '@/app/providers/locale-provider';
import { SectionLabel } from '../ui/section-label';
import { TagList } from '../ui/tag-list';
import { ProjectVisual } from './project-visual';

type ProjectDialogProps = {
  project: Project;
  onClose: () => void;
};

/** Native dialog supplies focus trapping, Escape handling and focus restoration. */
export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const { locale, translations: t } = useTranslations();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={onClose}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="dialog-inner">
        <button className="dialog-close" onClick={onClose} aria-label={t.close}>×</button>
        <SectionLabel>{t.projectContext}</SectionLabel>
        <h2 id="project-dialog-title">{project.name}</h2>
        <p className="dialog-company">{project.company} / {project.year}</p>
        <ProjectVisual id={project.id} translations={t} locale={locale} />
        <h3>{project.title}</h3>
        <p>{project.detail}</p>
        <TagList tags={project.tags} />
      </div>
    </dialog>
  );
}
