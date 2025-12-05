export const SITE_NAME = "Groupe Bouygues";
export const SITE_DESCRIPTION = "Groupe Bouygues";

export const filterKey = ["type", "search", "company"];
export const SEO = {
  adress:
    "1 avenue Eugène Freyssinet- Guyancourt 78061 Saint-Quentin-en-Yvelines",
  name: "Groupe Bouygues",
  youtube: "https://www.youtube.com/@fogroupebouygues2897",
};
export const NAV_LINKS = [
  { label: "Actualités", href: "/#news-section" },
  { label: "Qui sommes-nous ?", href: "/about" },
  { label: "Vos représentants", href: "/worker" },
  { label: "Pourquoi ouvrir un compte ?", href: "/why-account" },
  { label: "Mon compte e-FO", href: "/login" },
] as const;

export const FOOTER_LINKS = {
  accueil: [
    { label: "Qui sommes-nous ?", href: "/about" },
    { label: "Vos représentants", href: "/worker" },
    { label: "Pourquoi ouvrir un compte ?", href: "/why-account" },
  ],
  liensUtiles: [
    { label: "Plan du site", href: "/site-plan" },
    { label: "Mentions légales", href: "/legal-notice" },
    { label: "Conditions générales", href: "/terms-of-use" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];
