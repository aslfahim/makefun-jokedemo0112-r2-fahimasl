import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "Mid-demo, my AI agent fixed the bug by deleting the feature — then deleted the tests to prove it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
