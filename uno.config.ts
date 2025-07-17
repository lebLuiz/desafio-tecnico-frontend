import { defineConfig } from "unocss";
import { presetAttributify } from "@unocss/preset-attributify";
import { presetIcons } from "@unocss/preset-icons";
import { presetMini } from "@unocss/preset-mini";
import { presetTypography } from "@unocss/preset-typography";
import themeUnoCSS from "./src/assets/styles/unoCss/theme";
import rulesUnoCSS from "./src/assets/styles/unoCss/rules";
import shortcutsUnoCSS from "./src/assets/styles/unoCss/shortcuts";

const mdiCollection = import("@iconify-json/mdi/icons.json");
const iconCollections = () => {
  return {
    mdi: () => mdiCollection.then((i) => i.default),
  };
};

export default defineConfig({
  presets: [
    presetAttributify(),
    presetMini({ attributifyPseudo: true }),
    presetIcons({ collections: iconCollections() }),
    presetTypography(),
  ],

  theme: themeUnoCSS,
  rules: rulesUnoCSS,
  shortcuts: shortcutsUnoCSS,
});
