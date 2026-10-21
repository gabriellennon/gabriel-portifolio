# Gabriel Lennon — Portfolio

A multilingual developer portfolio built with Next.js App Router, React and TypeScript. English is the default language, with Portuguese and Spanish available through the language selector. Fonts and portfolio assets are served locally.

## Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npx tsc --noEmit
npm run build
```

## Architecture

```text
app/
├── page.tsx                 # Route composition: provider, layout and sections
├── layout.tsx               # HTML shell, local fonts and default metadata
├── components/
│   ├── sections/            # Hero, about, projects, stack, journey and contact
│   ├── layout/              # Header and footer
│   ├── projects/            # Cards, illustrations and accessible project dialog
│   └── ui/                  # Shared labels, arrows, tag lists and reveal wrapper
├── hooks/                   # Browser preferences, theme, metadata and scroll reveals
├── providers/               # Shared locale state and translation access
├── lib/site.ts              # Contact destinations, assets and section navigation
├── content.ts               # Typed project/experience records and content selectors
├── i18n.ts                  # Supported locales, English default and dictionary contract
├── translations/            # en.json, pt.json and es.json
└── globals.css              # Editorial design, responsive rules and reduced motion
```

`page.tsx` is a Server Component that composes the page. Components consuming the locale context are client boundaries because visitors can change language without navigating away. State stays close to its owner: the header owns its menu, projects own their filter and selected project, and the dialog owns its browser lifecycle. Only the selected locale is shared across sections.

Translations are accessed through `useTranslations()`. Project and experience copy use stable IDs rather than corresponding array positions. Navigation and external destinations are centralized to avoid inconsistent links.

Browser preferences use `useSyncExternalStore`, with deterministic server snapshots for hydration, synchronization across tabs and an in-memory fallback when storage writes fail. Reveal animations observe individual elements, so filtered project cards are animated when mounted. Reduced motion preferences are respected. The project dialog uses the native modal API for keyboard navigation and focus handling.

## Making changes

- **Edit a section:** update its named component in `app/components/sections/`.
- **Change copy:** update the corresponding keys in all three JSON dictionaries. English defines the TypeScript dictionary shape.
- **Add a project or experience:** add its stable ID and factual record in `app/content.ts`, then add its localized copy under that ID in each dictionary. Set its `media` record to an image path under `public/`, or use the Hurb illustration fallback. Set `websiteUrl` in the project record to enable its external website button; leave it `null` when no public link is available.
- **Update contact details or assets:** edit `app/lib/site.ts`.
- **Change appearance:** edit the existing classes in `app/globals.css`; section components preserve the same layout classes.

Project previews use the supplied images; Hurb retains an illustrative composition.
