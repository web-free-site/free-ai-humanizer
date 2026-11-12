export type Locale = "en" | "fr";

export const SITE_URL = "https://free-ai-humanizer.web-free.site";

export const messages = {
  en: {
    brand: "Free AI Humanizer",
    tagline: "Free, instant, private — rewrite AI text in your browser.",
    navTools: "Guides",
    switchFr: "Français",
    switchEn: "English",
    words: "Words",
    characters: "Characters",
    charsNoSpace: "Characters (no spaces)",
    sentences: "Sentences",
    paragraphs: "Paragraphs",
    lines: "Lines",
    reading: "Reading time",
    speaking: "Speaking time",
    keywordDensity: "Top keywords",
    paste: "Paste or type your text",
    pasteAi: "Paste AI-generated text here…",
    inputLabel: "Original text",
    outputLabel: "Humanized text",
    outputPlaceholder: "Humanized text appears here",
    toneLabel: "Tone",
    humanize: "Humanize text",
    working: "Working…",
    useOutput: "Edit humanized text",
    clear: "Clear",
    copy: "Copy",
    minutes: "min",
    privacyBadge: "100% client-side",
    footerBy: "by",
    basedOn: "Humanizer rules from",
    faq: "Frequently asked questions",
    related: "Related guides",
    home: "Home",
  },
  fr: {
    brand: "Humaniseur IA Gratuit",
    tagline: "Gratuit et privé — réécrivez le texte IA dans votre navigateur.",
    navTools: "Guides",
    switchFr: "Français",
    switchEn: "English",
    words: "Mots",
    characters: "Caractères",
    charsNoSpace: "Caractères (sans espaces)",
    sentences: "Phrases",
    paragraphs: "Paragraphes",
    lines: "Lignes",
    reading: "Temps de lecture",
    speaking: "Temps de parole",
    keywordDensity: "Mots-clés fréquents",
    paste: "Collez ou saisissez votre texte",
    pasteAi: "Collez ici le texte généré par l'IA…",
    inputLabel: "Texte original",
    outputLabel: "Texte humanisé",
    outputPlaceholder: "Le texte humanisé s'affiche ici",
    toneLabel: "Ton",
    humanize: "Humaniser",
    working: "Patientez…",
    useOutput: "Modifier le résultat",
    clear: "Effacer",
    copy: "Copier",
    minutes: "min",
    privacyBadge: "100 % côté client",
    footerBy: "par",
    basedOn: "Règles issues de",
    faq: "Questions fréquentes",
    related: "Guides associés",
    home: "Accueil",
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function t(locale: Locale): Messages {
  return messages[locale];
}

export function localePath(locale: Locale, path = ""): string {
  const base = locale === "fr" ? "/fr" : "";
  const p = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${base}${p || "/"}`;
}

export function alternateUrls(path: string): { en: string; fr: string } {
  const slug = path.replace(/^\//, "").replace(/\/$/, "");
  return {
    en: `${SITE_URL}/${slug ? slug + "/" : ""}`,
    fr: `${SITE_URL}/fr/${slug ? slug + "/" : ""}`,
  };
}
