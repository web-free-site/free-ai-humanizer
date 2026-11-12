/**
 * Client-side humanizer — rule pipeline from TidyText (MIT).
 * Phrase lists include entries from harshaneel/humanize (MIT).
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — vendored ESM without types
import { apply } from "@/vendor/tidytext-transforms.js";

export type HumanizerTone = "natural" | "professional" | "casual" | "friendly";

const TONE_FLAGS: Record<HumanizerTone, string[]> = {
  natural: ["fix_grammar", "paraphrase", "humanize", "remove_extra_spaces"],
  professional: ["fix_grammar", "paraphrase", "remove_extra_spaces"],
  casual: ["fix_grammar", "paraphrase", "humanize", "remove_extra_spaces"],
  friendly: ["paraphrase", "humanize", "remove_extra_spaces"],
};

/** Rewrite AI-sounding text with a chosen tone. Runs entirely in the browser. */
export function humanizeText(text: string, tone: HumanizerTone): string {
  const trimmed = text.trim();
  if (!trimmed) return "";

  let result = apply(trimmed, {
    flags: TONE_FLAGS[tone],
    lineBreaks: tone === "professional" ? "keep" : "paragraphs",
  });

  if (tone === "casual") {
    result = softenTransitions(result);
  }
  if (tone === "friendly") {
    result = result.replace(/\b(However|Therefore|Moreover|Furthermore),/gi, (m: string) =>
      m.toLowerCase().startsWith("however") ? "But," : "So,"
    );
  }

  return result.trim();
}

function softenTransitions(text: string): string {
  return text
    .replace(/\bIn addition,\b/gi, "Plus,")
    .replace(/\bAdditionally,\b/gi, "Also,")
    .replace(/\bConsequently,\b/gi, "So,")
    .replace(/\bNevertheless,\b/gi, "Still,");
}
