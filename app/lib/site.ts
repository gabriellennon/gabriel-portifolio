/** Shared destinations keep navigation and contact details consistent across sections. */
export const site = {
  name: 'Gabriel Lennon',
  email: 'gabriellennon7@gmail.com',
  links: {
    email: 'mailto:gabriellennon7@gmail.com',
    whatsapp: 'https://wa.link/jud2ij',
    linkedin: 'https://www.linkedin.com/in/gabriellennon',
    github: 'https://github.com/gabriellennon',
    resume: '/documents/gabriel-lennon-resume.pdf',
  },
  portrait: '/images/gabriel-lennon.png',
} as const;

export const sectionIds = ['about', 'work', 'stack', 'journey', 'contact'] as const;
