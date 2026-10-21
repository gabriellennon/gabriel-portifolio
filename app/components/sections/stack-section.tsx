'use client';

import { useTranslations } from '@/app/providers/locale-provider';
import { SectionLabel } from '../ui/section-label';
import { Reveal } from '../ui/reveal';
import { TagList } from '../ui/tag-list';

export function StackSection() {
  const { translations: t } = useTranslations();

  return (
    <section className="stack-band" id="stack">
      <Reveal className="wrap stack-inner">
        <div>
          <SectionLabel>{t.stackLabel}</SectionLabel>
          <h2>{t.stackTitle}</h2>
        </div>
        <div className="stack-grid">
          {t.stackGroups.map(group => (
            <div className="stack-group" key={group.id}>
              <h3>{group.title}</h3>
              <TagList tags={group.items} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
