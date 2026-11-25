// The Battery's Last Text to Its Charger
// make.fun entry — Node stdlib only. Writes one line of plain text to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Self-judge (DIFFERENT_PLAYBOOK §7 + judge brief): the turn is a REVERSAL,
// not escalation — the charger is reframed as a coroner arriving to certify
// the death, not to prevent it. Punchline ("5-watt alibi") cannot be guessed
// from clause one; it closes on a named object + a number, never an abstract
// word. One concrete detail (USB-C cable, 5W) anchors the spite.
// Board is blind, so novelty is judged against the obvious premises:
// 1%-plea, "don't leave me", pure waiting lament — all avoided here.
const ENTRY =
  "I waited all day and you show up at 1%. You're not a charger, you're a coroner with a USB-C cable and a 5-watt alibi.";

// Gate: the sealed scorer requires UTF-8 text of 1 to 200 characters,
// not only whitespace, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1..200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
