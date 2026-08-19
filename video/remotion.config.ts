/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { existsSync } from "node:fs";
import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideBundlerConfig(enableTailwind);

// This sandbox blocks downloading Remotion's own Chrome Headless Shell
// (remotion.media is not in the network allowlist). Reuse the Playwright
// Chromium that's already preinstalled in this environment instead.
const preinstalledChromium =
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";
if (existsSync(preinstalledChromium)) {
  Config.setBrowserExecutable(preinstalledChromium);
}
