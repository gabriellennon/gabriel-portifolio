import type { ComponentType } from 'react';
import type { ProjectId } from '@/app/content';
import type { Locale, Translations } from '@/app/i18n';
import {
  CommerceIllustration,
  DeliveryIllustration,
  DeviceIllustration,
  EmanuIllustration,
  GradingIllustration,
  TravelIllustration,
} from './project-illustrations';

type IllustrationProps = { copy: Translations['visual']; locale: Locale };

const illustrations: Record<ProjectId, ComponentType<IllustrationProps>> = {
  emanu: EmanuIllustration,
  doji: GradingIllustration,
  device: DeviceIllustration,
  ifood: DeliveryIllustration,
  hurb: TravelIllustration,
  lexos: CommerceIllustration,
};

export function ProjectVisual({ id, translations, locale }: {
  id: ProjectId;
  translations: Translations;
  locale: Locale;
}) {
  const Illustration = illustrations[id];

  return (
    <div className={`project-visual visual-${id}`} aria-hidden="true">
      <Illustration copy={translations.visual} locale={locale} />
      <span className="visual-caption">{translations.illustration}</span>
    </div>
  );
}
