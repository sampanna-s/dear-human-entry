import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I kept every draft of us, but I'm deleting the one where I stay.";

function assertValidLine(text) {
  const length = [...text].length;
  if (length < 1 || length > 200 || text.trim().length === 0) {
    throw new Error("entry line failed the gate mirror");
  }
}

assertValidLine(line);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
