import type { UserShortcuts } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";

export default {
  // atalhos opcionais para facilitar o uso no HTML
  "text-h4": "text-h4 font-semibold font-poppins",
  "text-lg-bold": "text-lg font-semibold font-poppins",
  "text-body3": "text-body3 font-regular font-poppins",
  "text-body4": "text-body4 font-semibold font-poppins",
  "text-desc": "text-desc font-regular font-poppins",

  "limit-caracteres": "whitespace-nowrap overflow-hidden text-ellipsis",
} as UserShortcuts<Theme>;
