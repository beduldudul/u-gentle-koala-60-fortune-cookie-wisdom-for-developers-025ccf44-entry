import { mkdirSync, writeFileSync } from "node:fs";

// One fortune-cookie line: the fear of legacy code is a circle —
// every feared codebase was once written by someone afraid of the one
// before it. Balanced sentence, true of a developer's day, quiet twist.
const line =
  "The legacy code you fear was once written by someone who feared the legacy code before it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
