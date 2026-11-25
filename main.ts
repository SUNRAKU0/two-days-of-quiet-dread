// Quiet dread entry: writes one code review comment to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The review approves the code and quietly mourns the future in the same breath.
const line = 'LGTM. The code works, the tests pass, and none of that will matter in six months anyway.';

mkdirSync(outDir, { recursive: true });
// The approval is already written; this just gives it a quiet place to land.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
