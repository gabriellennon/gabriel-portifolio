'use client';

import { useState } from 'react';
import { filterProjects, getProjects, projectFilters, type ProjectFilter, type ProjectId } from '@/app/content';
import { site } from '@/app/lib/site';
import { useTranslations } from '@/app/providers/locale-provider';
import { Arrow } from '../ui/arrow';
import { Reveal } from '../ui/reveal';
import { SectionLabel } from '../ui/section-label';
import { ProjectCard } from '../projects/project-card';
import { ProjectDialog } from '../projects/project-dialog';

export function ProjectsSection() {
  const { locale, translations: t } = useTranslations();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<ProjectId | null>(null);
  const projects = getProjects(locale);
  const visibleProjects = filterProjects(projects, activeFilter);
  const selectedProject = projects.find(project => project.id === selectedProjectId);

  return (
    <>
      <section className="work wrap section" id="work">
        <Reveal className="section-heading">
          <div>
            <SectionLabel>{t.projectsLabel}</SectionLabel>
            <h2>{t.projectsTitle}</h2>
          </div>
          <div className="filters" role="group" aria-label={t.projectsTitle}>
            {projectFilters.map(filter => (
              <button
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {t.projectFilters[filter]}
                {activeFilter === filter && <span> / {String(visibleProjects.length).padStart(2, '0')}</span>}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="projects-grid">
          {visibleProjects.map(project => (
            <ProjectCard key={project.id} project={project} onSelect={project => setSelectedProjectId(project.id)} />
          ))}
        </div>
        <p className="project-disclaimer">{t.projectNote}</p>
        <a href={site.links.github} className="text-link" target="_blank" rel="noopener noreferrer">GITHUB <Arrow /></a>
      </section>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProjectId(null)} />}
    </>
  );
}
