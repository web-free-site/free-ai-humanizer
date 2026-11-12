import { describe, expect, it } from "vitest";
import { humanizeText } from "./humanize";

describe("humanizeText", () => {
  it("replaces stiff AI filler", () => {
    const input = "Furthermore, it is important to note that we utilize AI to facilitate growth.";
    const out = humanizeText(input, "natural");
    expect(out.toLowerCase()).not.toContain("furthermore");
    expect(out.toLowerCase()).toContain("use");
  });

  it("keeps professional tone without changing empty input", () => {
    expect(humanizeText("   ", "professional")).toBe("");
  });
});
