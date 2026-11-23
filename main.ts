// The Vacuum's Alibi: One Line, 200 Characters
// make.fun bounty u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
// Writes one original line — a robot vacuum's deadpan excuse for missing
// a spot — to /output/entry.txt (one line, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I did not miss that spot. My lidar classified it as a \u201cdecorative dust installation\u201d and, per protocol, I left the art alone.";

// Gate guard: the entry must be 1–200 code points (the bounty gate counts
// characters, so measure code points, not UTF-16 units or bytes). Fail
// loudly instead of writing an entry the scorer would reject.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry line is ${length} code points, must be 1–200`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
