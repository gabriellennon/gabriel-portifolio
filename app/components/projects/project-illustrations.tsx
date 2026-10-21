import type { Translations } from '@/app/i18n';

type IllustrationProps = { copy: Translations['visual'] };

export function TravelIllustration({ copy }: IllustrationProps) {
  return (
    <>
      <div className="travel-sun" />
      <div className="travel-mountain one" />
      <div className="travel-mountain two" />
      <div className="travel-window">
        <small>hurb.</small>
        <strong>{copy.travelHeadline[0]}<br />{copy.travelHeadline[1]}<br />{copy.travelHeadline[2]}</strong>
        <span>{copy.travelNext}　↗</span>
      </div>
    </>
  );
}
