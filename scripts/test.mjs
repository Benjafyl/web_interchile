import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
const directory = mkdtempSync(join(tmpdir(), "interchile-tests-"));
try {
  execFileSync(
    process.execPath,
    [
      "node_modules/typescript/bin/tsc",
      "src/lib/contact-validation.ts",
      "src/lib/contact-security.ts",
      "src/lib/analytics.ts",
      "--outDir",
      directory,
      "--module",
      "commonjs",
      "--target",
      "ES2022",
      "--lib",
      "es2022,dom",
      "--skipLibCheck",
      "--esModuleInterop",
    ],
    { stdio: "inherit" },
  );
  const result = spawnSync(
    process.execPath,
    ["--test", "tests/security.test.mjs", "tests/analytics.test.mjs"],
    {
      stdio: "inherit",
      env: { ...process.env, INTERCHILE_TEST_BUILD: directory },
    },
  );
  process.exitCode = result.status || 0;
} finally {
  const target = resolve(directory);
  if (
    dirname(target) !== resolve(tmpdir()) ||
    !target.split(/[\\/]/).at(-1).startsWith("interchile-tests-")
  )
    throw new Error("Unexpected test cleanup path");
  rmSync(target, { recursive: true, force: true });
}
