import Link from "next/link";
import { AdSlot } from "./AdSlot";

export function HomeSeoContent({
  faqs,
  faqTitle,
}: {
  faqs: { q: string; a: string }[];
  faqTitle: string;
}) {
  return (
    <>
      <div className="my-8 flex flex-col items-center gap-6">
        <AdSlot slot="banner300x250" />
        <AdSlot slot="banner468x60" className="sm:hidden" />
      </div>

      <article className="mt-10 space-y-6 text-forest/90 leading-relaxed max-w-none">
        <p>
          Free AI Humanizer helps you turn stiff drafts from ChatGPT, Claude, Gemini, Copilot, and
          other assistants into prose that reads naturally. It runs entirely in your browser using
          open-source phrase rules (TidyText, MIT)—no paid LLM, no account, and no upload to our
          servers.
        </p>
        <p>
          The tool is built for bloggers polishing posts, students drafting essays, marketers
          refining product copy, and anyone who uses AI for a first pass but wants the final text to
          sound like a real person wrote it. You might use it after ChatGPT outlines a newsletter,
          before you send a client update, or when a landing page sounds too formal on the second
          read. Pick a tone, paste your draft, and get a rewritten version with a live word counter
          on both sides so you can see how length changes.
        </p>
        <p>
          This site is part of the{" "}
          <a
            href="https://web-free.site/?ref=ai-humanizer"
            className="text-forest underline underline-offset-2 hover:text-gold"
          >
            web-free.site
          </a>{" "}
          network of free browser tools. For deeper workflows, see our guides on{" "}
          <Link
            href="/how-to-edit-ai-text-before-you-publish/"
            className="text-forest underline underline-offset-2 hover:text-gold"
          >
            editing AI text before you publish
          </Link>{" "}
          and{" "}
          <Link
            href="/how-to-rewrite-ai-text-for-an-email/"
            className="text-forest underline underline-offset-2 hover:text-gold"
          >
            rewriting AI text for email
          </Link>
          .
        </p>

        <section>
          <h2 className="font-display text-2xl text-forest mb-4">How to use the humanizer</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Copy your AI-generated text from any assistant and paste it into the Original text box
              above.
            </li>
            <li>
              Choose a tone: Natural for everyday writing, Casual or Friendly for blogs and social
              posts, or Professional when you want formal paraphrase without informal slips.
            </li>
            <li>
              Click <strong>Humanize text</strong>. The engine swaps common AI phrases, trims filler,
              and can add contractions depending on the tone you selected.
            </li>
            <li>
              Read the output in the Humanized text panel. Use Copy, or send the result back to the
              input box with Edit humanized text if you want another pass.
            </li>
            <li>
              Proofread names, numbers, links, and citations yourself, then add a sentence or detail
              only you could write so the piece reflects your voice.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest mb-4">Tips and limitations</h2>
          <p>
            Rule-based rewriting improves flow and removes obvious machine wording, but it cannot
            invent personal stories, verify facts, or promise that any third-party AI detector will
            label the text as human-written. Detectors change often; no tool can guarantee a
            particular score.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Always double-check statistics, quotes, and proper nouns after humanizing.</li>
            <li>
              Combine the output with manual edits—shorten repetitive sentences and vary paragraph
              length.
            </li>
            <li>
              For confidential drafts, client-side processing means your text stays on your device
              after the page loads.
            </li>
            <li>
              Follow your school or workplace policies on AI-assisted writing; this tool edits
              style, not authorship.
            </li>
          </ul>
        </section>
      </article>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-forest mb-4">{faqTitle}</h2>
        <dl className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-forest/10 bg-white p-4">
              <dt className="font-semibold text-forest">{f.q}</dt>
              <dd className="mt-2 text-forest/80">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}