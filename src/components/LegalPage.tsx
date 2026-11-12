import { SiteShell } from "./SiteShell";
import type { Locale } from "@/lib/i18n";

const copy: Record<string, { en: { title: string; body: string }; fr: { title: string; body: string } }> = {
  privacy: {
    en: {
      title: "Privacy Policy",
      body: "Free AI Humanizer processes text only in your browser. We do not collect, store, or sell your content. Analytics or ads from third parties (Adsterra) may set cookies according to their policies. Humanizer rules are derived from TidyText (MIT). Contact gentil@quevvy.com for questions.",
    },
    fr: {
      title: "Politique de confidentialité",
      body: "Humaniseur IA Gratuit traite le texte uniquement dans votre navigateur. Nous ne collectons pas votre contenu. Les annonceurs tiers (Adsterra) peuvent utiliser des cookies. Contact : gentil@quevvy.com.",
    },
  },
  terms: {
    en: {
      title: "Terms of Use",
      body: "Use this humanizer at your own risk. It is provided free without warranty. Do not use it for unlawful purposes or to misrepresent authorship where your institution forbids it. Gentil M. may update these terms at any time.",
    },
    fr: {
      title: "Conditions d'utilisation",
      body: "Outil fourni sans garantie. Respectez les règles d'intégrité académique de votre établissement.",
    },
  },
  about: {
    en: {
      title: "About",
      body: "Free AI Humanizer is built by Gentil M. in Kigali, Rwanda, for the web-free.site network. The rewriter uses client-side rules adapted from the open-source TidyText project (MIT), with AI-phrase patterns from harshaneel/humanize (MIT). UI patterns follow other Free tools in the same network.",
    },
    fr: {
      title: "À propos",
      body: "Humaniseur IA Gratuit est créé par Gentil M. à Kigali. Moteur de réécriture basé sur TidyText (MIT) et harshaneel/humanize (MIT).",
    },
  },
  contact: {
    en: {
      title: "Contact",
      body: "Email: gentil@quevvy.com — Website: https://gentil.quevvy.com",
    },
    fr: {
      title: "Contact",
      body: "Courriel : gentil@quevvy.com — Site : https://gentil.quevvy.com",
    },
  },
};

export function LegalPage({ locale, page }: { locale: Locale; page: string }) {
  const c = copy[page]?.[locale] ?? copy.privacy.en;
  return (
    <SiteShell locale={locale} path={page}>
      <h1 className="font-display text-3xl text-forest mb-6">{c.title}</h1>
      <p className="text-forest/90 leading-relaxed max-w-2xl">{c.body}</p>
    </SiteShell>
  );
}
