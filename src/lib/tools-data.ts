import type { Locale } from "./i18n";

export type ToolId =
  | "humanize-chatgpt-text"
  | "how-to-humanize-ai-writing"
  | "paraphrase-ai-text"
  | "make-ai-text-sound-human";

export interface ToolMeta {
  id: ToolId;
  slug: string;
  en: { title: string; description: string; h1: string; body: string; faqs: { q: string; a: string }[] };
  fr: { title: string; description: string; h1: string; body: string; faqs: { q: string; a: string }[] };
}

const sharedEn =
  "Everything runs in your browser. No API keys, no uploads, and no account. Paste AI copy from ChatGPT, Claude, Gemini, or Copilot, pick a tone, and click Humanize. The rewriter uses hand-checked phrase rules (MIT-licensed TidyText) to swap stiff AI wording, trim filler, and add natural contractions—without calling a paid LLM.";

const sharedFr =
  "Tout s'exécute dans votre navigateur : pas de clé API, pas d'envoi sur un serveur. Collez un texte IA, choisissez un ton et cliquez sur Humaniser. Des règles de reformulation open source (TidyText, licence MIT) remplacent le jargon robotique sans appeler un grand modèle payant.";

export const ALL_TOOLS: ToolMeta[] = [
  {
    id: "humanize-chatgpt-text",
    slug: "humanize-chatgpt-text",
    en: {
      title: "How to Humanize ChatGPT Text Online — Free Rewrite Tool",
      description:
        "Humanize ChatGPT text for free in your browser. Swap AI filler words, shorten formal phrases, and match natural tone—no sign-up or API key.",
      h1: "Humanize ChatGPT Text (Free)",
      body: `ChatGPT and similar models love formal connectors: "Furthermore," "It is important to note," and "leverage" show up in almost every draft. Readers notice that rhythm long before any AI detector runs.

This guide pairs with the Free AI Humanizer on the home page. Paste ChatGPT output, choose Natural or Casual tone, and let the rule engine replace stock phrases with plain language. ${sharedEn}

**Quick workflow:** draft in your AI tool → paste here → humanize → read aloud once. If a sentence still sounds stiff, shorten it manually; the rewriter keeps your facts but cannot invent your point of view.`,
      faqs: [
        { q: "Does this bypass ChatGPT wording only?", a: "It targets common LLM patterns in any English AI draft, not just ChatGPT." },
        { q: "Will it change my meaning?", a: "It replaces phrases, not facts. Always proofread names, numbers, and citations." },
        { q: "Is humanizing ChatGPT text free?", a: "Yes. The tool is free and runs client-side." },
      ],
    },
    fr: {
      title: "Humaniser un texte ChatGPT — Outil gratuit en ligne",
      description:
        "Humanisez un texte ChatGPT gratuitement dans le navigateur. Supprimez le jargon IA sans inscription.",
      h1: "Humaniser un texte ChatGPT",
      body: `ChatGPT produit souvent des connecteurs trop formels. ${sharedFr} Utilisez l'outil sur la page d'accueil, puis relisez à voix haute.`,
      faqs: [
        { q: "Ça marche seulement pour ChatGPT ?", a: "Non, pour tout texte IA en anglais." },
        { q: "Le sens change-t-il ?", a: "Les faits restent ; vérifiez chiffres et noms." },
        { q: "C'est gratuit ?", a: "Oui, 100 % côté client." },
      ],
    },
  },
  {
    id: "how-to-humanize-ai-writing",
    slug: "how-to-humanize-ai-writing",
    en: {
      title: "How to Humanize AI Writing — Step-by-Step (No API Key)",
      description:
        "Learn how to humanize AI writing with a free browser tool: tone options, word counter, and rule-based rewrites that keep your text private.",
      h1: "How to Humanize AI Writing",
      body: `Humanizing AI writing is two jobs: remove machine patterns (uniform rhythm, recycled vocabulary) and add your specifics (examples, opinions, experience). This site handles the first job with deterministic rules; you add the second after pasting.

**Steps:** (1) Paste the AI draft. (2) Pick a tone—Professional for reports, Casual for blogs. (3) Click Humanize. (4) Use the word counter to see length change. (5) Edit manually where needed.

${sharedEn} For French landing content, visit the Français version of this site.`,
      faqs: [
        { q: "What tones are available?", a: "Natural, Casual, Friendly, and Professional." },
        { q: "Do you store my writing?", a: "No. Processing is local." },
        { q: "Can I humanize long articles?", a: "Yes, though very large texts may slow older phones." },
      ],
    },
    fr: {
      title: "Comment humaniser un texte IA — Guide gratuit",
      description: "Guide pour humaniser un texte généré par l'IA avec un outil gratuit dans le navigateur.",
      h1: "Comment humaniser un texte IA",
      body: sharedFr,
      faqs: [
        { q: "Quels tons ?", a: "Naturel, Décontracté, Amical, Professionnel." },
        { q: "Stockage ?", a: "Non, tout est local." },
        { q: "Longs articles ?", a: "Oui, avec une relecture manuelle." },
      ],
    },
  },
  {
    id: "paraphrase-ai-text",
    slug: "paraphrase-ai-text",
    en: {
      title: "Paraphrase AI Text Free — Rule-Based Rewriter Online",
      description:
        "Paraphrase AI-generated sentences online for free. Client-side phrase rewrites; no QuillBot API or subscription required.",
      h1: "Paraphrase AI Text Free",
      body: `Paraphrasing AI text means changing structure and wording while keeping meaning. Our engine applies curated mappings ("is able to" → "can", "utilize" → "use") from the TidyText project, extended with MIT-licensed AI-phrase lists.

Use Professional tone if you want paraphrase without informal slips; use Natural or Casual for full humanize mode. ${sharedEn}`,
      faqs: [
        { q: "Is this the same as QuillBot?", a: "No. We use open rules in your browser, not a proprietary cloud rewriter." },
        { q: "Does paraphrase work offline?", a: "After the page loads, yes." },
        { q: "English only?", a: "Rules target English AI phrasing; the UI is also in French." },
      ],
    },
    fr: {
      title: "Paraphraser un texte IA gratuitement",
      description: "Paraphrasez un texte IA en ligne, sans API ni abonnement.",
      h1: "Paraphraser un texte IA",
      body: sharedFr,
      faqs: [
        { q: "Comme QuillBot ?", a: "Non, règles locales open source." },
        { q: "Hors ligne ?", a: "Oui après chargement." },
        { q: "Langues ?", a: "Règles en anglais ; interface FR disponible." },
      ],
    },
  },
  {
    id: "make-ai-text-sound-human",
    slug: "make-ai-text-sound-human",
    en: {
      title: "Make AI Text Sound Human — Free Natural Tone Rewriter",
      description:
        "Make AI text sound human with a free online humanizer. Tone control, live word count, private client-side processing.",
      h1: "Make AI Text Sound Human",
      body: `AI text often sounds flat because every sentence has the same length and connectors repeat. Human readers expect uneven rhythm, contractions, and occasional short fragments.

Free AI Humanizer breaks that pattern with phrase swaps, filler removal, and optional casual tone. ${sharedEn} Pair the output with one concrete detail you supply—a date, a place, a opinion—and the paragraph will read far more human.`,
      faqs: [
        { q: "Will detectors always score it as human?", a: "No tool can promise that. Focus on clarity and your own edits." },
        { q: "Can students use this?", a: "Follow your school's academic integrity policy; this tool edits style, not authorship." },
        { q: "Why rule-based instead of an LLM?", a: "Rules are free, private, and predictable—no API keys on our servers." },
      ],
    },
    fr: {
      title: "Rendre un texte IA plus humain — Gratuit",
      description: "Rendez un texte IA plus naturel avec un humaniseur gratuit.",
      h1: "Rendre un texte IA humain",
      body: sharedFr,
      faqs: [
        { q: "Détecteurs IA ?", a: "Aucune garantie ; relisez et personnalisez." },
        { q: "Usage scolaire ?", a: "Respectez l'intégrité académique de votre établissement." },
        { q: "Pourquoi sans LLM ?", a: "Gratuit, privé et sans clé API." },
      ],
    },
  },
];

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return ALL_TOOLS.find((t) => t.slug === slug);
}

export function getMeta(locale: Locale, tool: ToolMeta) {
  return locale === "fr" ? tool.fr : tool.en;
}

export const HOME_META = {
  en: {
    title: "Free AI Humanizer — Make AI Text Sound Human Online",
    description:
      "Free AI humanizer online: rewrite ChatGPT and AI text with natural tone options, live word counter, and private browser processing. No API key.",
    h1: "Free AI Humanizer",
    body: `Turn stiff AI drafts into readable prose. Free AI Humanizer rewrites text in your browser using open-source phrase rules from TidyText (MIT)—no paid LLM, no upload, no account.

Paste blog posts, emails, essays, or product copy from any AI assistant. Choose Natural, Casual, Friendly, or Professional tone. Watch the word counter update on both sides, then copy the humanized text in one click.

**Why use a client-side humanizer?** Cloud rewriters send your content to third-party servers. Here, rules run locally: synonyms, filler removal, contractions, and paraphrase mappings execute on your device. That is ideal for confidential drafts and slow mobile networks.

**How it works:** the engine applies grammar cleanup, hand-checked paraphrase pairs ("in order to" → "to"), then humanize swaps that target classic AI tells ("delve into", "landscape", "it is worth noting"). Professional tone skips informal slips; Casual adds softer transitions.

**Limits:** rule-based rewriting cannot add personal stories or verify facts. Always proofread numbers, links, and quotes. For best results, combine humanize output with one or two sentences only you could write.

Built by Gentil M. in Kigali for the web-free.site network. Humanizer logic adapted from TidyText; additional AI-phrase patterns credited to harshaneel/humanize (MIT).`,
    faqs: [
      { q: "Is Free AI Humanizer really free?", a: "Yes. No subscription and no API key. Optional ads support hosting." },
      { q: "Does my text leave my device?", a: "No. Humanizing runs entirely in JavaScript in your browser." },
      { q: "Which AI tools does it work with?", a: "Any English AI draft: ChatGPT, Claude, Gemini, Copilot, and others." },
      { q: "What are the tone options?", a: "Natural (balanced), Casual, Friendly, and Professional (formal paraphrase without informal slips)." },
      { q: "Can it beat AI detectors?", a: "It improves natural flow but cannot guarantee detector scores. Edit and add your own details." },
    ],
  },
  fr: {
    title: "Humaniseur IA Gratuit — Texte naturel en ligne",
    description:
      "Humaniseur IA gratuit : réécrivez le texte ChatGPT avec choix de ton, compteur de mots et traitement privé dans le navigateur.",
    h1: "Humaniseur IA Gratuit",
    body: `Transformez un brouillon IA rigide en texte lisible. ${sharedFr} Choisissez un ton, surveillez le compteur de mots, copiez le résultat. Logique adaptée de TidyText (MIT).`,
    faqs: [
      { q: "Est-ce gratuit ?", a: "Oui, sans abonnement ni clé API." },
      { q: "Confidentialité ?", a: "Le texte reste sur votre appareil." },
      { q: "Compatibilité ?", a: "Texte IA en anglais ; interface en français." },
      { q: "Quels tons ?", a: "Naturel, Décontracté, Amical, Professionnel." },
      { q: "Détecteurs IA ?", a: "Améliore le style ; relisez toujours." },
    ],
  },
};

export const TOOL_SLUGS = ALL_TOOLS.map((t) => t.slug);
