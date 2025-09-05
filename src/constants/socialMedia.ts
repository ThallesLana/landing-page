export const SOCIAL_MEDIA = {
  mail: 'mailto:contato@thalles-lana.dev',
  linkedin: 'https://www.linkedin.com/in/thalles-lana/',
  github: 'https://github.com/ThallesLana/',
} as const;

export const redirectToUrl = (url: keyof typeof SOCIAL_MEDIA) => {
  window.open(SOCIAL_MEDIA[url], '_blank');
};
