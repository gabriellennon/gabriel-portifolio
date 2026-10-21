import type { Locale, Translations } from '@/app/i18n';

type IllustrationProps = { copy: Translations['visual']; locale: Locale };

export function EmanuIllustration({ copy }: IllustrationProps) {
  return (
    <>
      <div className="emanu-word">emanu<span>✳</span></div>
      <div className="phone">
        <div className="phone-camera" />
        <small>emanu</small>
        <div className="phone-sun">✳</div>
        <strong>{copy.emanuHeadline[0]}<br />{copy.emanuHeadline[1]}</strong>
        <div className="phone-card">✧<i /><i /><i /></div>
        <div className="phone-tabs">⌂　♡　◉　☷</div>
      </div>
      <div className="floating-note">150k+<small>{copy.downloads}</small></div>
    </>
  );
}

export function DeviceIllustration({ copy }: IllustrationProps) {
  return (
    <>
      <div className="diagnostic-orbit" />
      <div className="phone diagnostic">
        <div className="phone-camera" />
        <small>{copy.diagnostics}</small>
        <div className="check-ring">✓</div>
        <strong>{copy.deviceCheck}</strong>
        {[copy.display, copy.camera, copy.audio].map(label => (
          <div className="diagnostic-row" key={label}>{label} <span>✓</span></div>
        ))}
        <div className="progress-bar" />
      </div>
      <span className="visual-coordinate">{copy.mobile}</span>
    </>
  );
}

export function DeliveryIllustration({ copy, locale }: IllustrationProps) {
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });

  return (
    <div className="delivery-map">
      <svg viewBox="0 0 400 240">
        <path className="map-road" d="M-10 60L410 190M40 -20L160 260M-10 180L410 40M220 -20L320 260M-10 120L410 110" />
        <path className="map-route" d="M70 160L130 139L170 145L234 92L308 108" />
        <circle cx="70" cy="160" r="7" />
        <circle cx="308" cy="108" r="7" />
      </svg>
      <div className="map-label">iFood<span>{copy.deliveryIntelligence}</span></div>
      <div className="map-card">
        <span>↗</span>
        <b>24 min<small>{number.format(2.4)} km</small></b>
        <i>● ● ●</i>
      </div>
    </div>
  );
}

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

function GradingContent({ copy }: Pick<IllustrationProps, 'copy'>) {
  return (
    <div className="grade-content">
      <div className="mini-device" />
      <div>
        <span>{copy.condition}</span>
        <strong>A+</strong>
        <i /><i />
        <div className="grade-chip">✓ {copy.verified}</div>
      </div>
    </div>
  );
}

function CommerceContent() {
  const barHeights = [30, 50, 40, 65, 48, 78, 68, 90, 74, 98];

  return (
    <>
      <div className="stat-blocks"><i /><i /><i /></div>
      <div className="chart">
        {barHeights.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
      </div>
    </>
  );
}

function DashboardIllustration({ copy, variant }: Pick<IllustrationProps, 'copy'> & { variant: 'doji' | 'lexos' }) {
  const isGrading = variant === 'doji';

  return (
    <div className={`browser-window ${variant}`}>
      <div className="browser-chrome">
        <i /><i /><i />
        <span>{isGrading ? copy.gradingPath : copy.commercePath}</span>
      </div>
      <div className="dashboard">
        <aside><b>{isGrading ? 'doji.' : 'lexos'}</b><i /><i /><i /><i /></aside>
        <div className="dashboard-content">
          <small>{isGrading ? copy.deviceGrading : copy.overview}</small>
          <div className="dashboard-top">
            <b>{isGrading ? 'iPhone 14 Pro' : copy.business}</b>
            <span>↗</span>
          </div>
          {isGrading ? <GradingContent copy={copy} /> : <CommerceContent />}
        </div>
      </div>
    </div>
  );
}

export function GradingIllustration({ copy }: IllustrationProps) {
  return <DashboardIllustration copy={copy} variant="doji" />;
}

export function CommerceIllustration({ copy }: IllustrationProps) {
  return <DashboardIllustration copy={copy} variant="lexos" />;
}
