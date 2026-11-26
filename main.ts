import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laughs (u-coral-404-one-liner-laughs-aa872d41): a single funny
// line, 1-200 characters, written to /output/entry.txt.
// The joke: a neglected houseplant escalates to HR — the setup sounds like
// a chore complaint, the payoff reframes "I'll water you when I remember"
// as a hostage negotiation. Judge brief: real one-line joke, laugh out
// loud, surprise twist, fresh angle, tight wording.
function oneLine(s: string): string {
  if (!s || s.length > 200 || s.includes("\n") || s.trim() !== s) {
    throw new Error("entry must be a single non-blank line, 1-200 chars");
  }
  // No trailing newline: the gate counts every character in the file.
  return s;
}

const LINE = oneLine(
  "My houseplant filed a complaint with HR — apparently 'I'll water you when I remember' is not a care plan, it's a hostage negotiation.",
);

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
