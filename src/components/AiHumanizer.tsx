"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { humanizeText, type HumanizerTone } from "@/lib/humanize";
import { computeStats } from "@/lib/count";
import { AdSlot } from "./AdSlot";

const TONES: { id: HumanizerTone; labelEn: string; labelFr: string }[] = [
  { id: "natural", labelEn: "Natural", labelFr: "Naturel" },
  { id: "casual", labelEn: "Casual", labelFr: "Décontracté" },
  { id: "friendly", labelEn: "Friendly", labelFr: "Amical" },
  { id: "professional", labelEn: "Professional", labelFr: "Professionnel" },
];

export function AiHumanizer({ locale }: { locale: Locale }) {
  const m = t(locale);
  const [input, setInput] = useState("");
  const [tone, setTone] = useState<HumanizerTone>("natural");
  const [output, setOutput] = useState("");
  const [busy, setBusy] = useState(false);

  const inputStats = useMemo(() => computeStats(input), [input]);
  const outputStats = useMemo(() => computeStats(output), [output]);

  function runHumanize() {
    setBusy(true);
    try {
      const next = humanizeText(input, tone);
      setOutput(next);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 items-center">
        <span className="text-sm font-medium text-forest/80">{m.toneLabel}</span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={m.toneLabel}>
          {TONES.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={tone === opt.id}
              onClick={() => setTone(opt.id)}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                tone === opt.id
                  ? "bg-forest text-cream border-forest"
                  : "bg-white border-forest/20 hover:border-gold text-forest"
              }`}
            >
              {locale === "fr" ? opt.labelFr : opt.labelEn}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="humanizer-input" className="text-sm font-semibold text-forest">
            {m.inputLabel}
          </label>
          <textarea
            id="humanizer-input"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={m.pasteAi}
            className="w-full min-h-[220px] rounded-2xl border-2 border-forest/15 bg-white p-4 text-base shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            spellCheck
          />
          <p className="text-xs text-forest/60">
            {m.words}: <strong>{inputStats.words}</strong> · {m.characters}:{" "}
            <strong>{inputStats.characters}</strong>
          </p>
        </div>
        <div className="space-y-2">
          <label htmlFor="humanizer-output" className="text-sm font-semibold text-forest">
            {m.outputLabel}
          </label>
          <textarea
            id="humanizer-output"
            name="output"
            value={output}
            readOnly
            placeholder={m.outputPlaceholder}
            className="w-full min-h-[220px] rounded-2xl border-2 border-mint/40 bg-mint/5 p-4 text-base shadow-sm"
          />
          <p className="text-xs text-forest/60">
            {m.words}: <strong>{outputStats.words}</strong> · {m.characters}:{" "}
            <strong>{outputStats.characters}</strong>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!input.trim() || busy}
          onClick={runHumanize}
          className="rounded-full bg-gold text-forest px-6 py-2.5 text-sm font-semibold hover:bg-gold/90 disabled:opacity-50"
        >
          {busy ? m.working : m.humanize}
        </button>
        <button
          type="button"
          onClick={() => {
            setInput("");
            setOutput("");
          }}
          className="rounded-full border border-forest/20 px-4 py-2 text-sm hover:bg-mint/20"
        >
          {m.clear}
        </button>
        <button
          type="button"
          disabled={!output}
          onClick={() => navigator.clipboard.writeText(output)}
          className="rounded-full border border-forest/20 px-4 py-2 text-sm hover:bg-mint/20 disabled:opacity-50"
        >
          {m.copy}
        </button>
        <button
          type="button"
          disabled={!output}
          onClick={() => {
            setInput(output);
            setOutput("");
          }}
          className="rounded-full border border-forest/20 px-4 py-2 text-sm hover:bg-mint/20 disabled:opacity-50"
        >
          {m.useOutput}
        </button>
      </div>

      <AdSlot slot="banner300x250" className="lg:hidden" />
      <AdSlot slot="nativeBanner" />
    </div>
  );
}
