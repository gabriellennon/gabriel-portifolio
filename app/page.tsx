import { LocaleProvider } from './providers/locale-provider';
import { SiteHeader } from './components/layout/site-header';
import { SiteFooter } from './components/layout/site-footer';
import { HeroSection } from './components/sections/hero-section';
import { AboutSection } from './components/sections/about-section';
import { ProjectsSection } from './components/sections/projects-section';
import { StackSection } from './components/sections/stack-section';
import { JourneySection } from './components/sections/journey-section';
import { ContactSection } from './components/sections/contact-section';

export default function Home() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StackSection />
        <JourneySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </LocaleProvider>
  );
}
