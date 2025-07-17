import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";

export default [
  ["h-0.1", { height: "0.063rem" }],
  ["w-min-content", { width: "min-content" }],
  ["max-w-xs", { "max-width": "16rem" }],
] as Rule<Theme>[];
