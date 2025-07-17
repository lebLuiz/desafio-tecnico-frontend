import type { Theme } from "@unocss/preset-mini";

export default {
  fontFamily: {
    poppins: "Poppins, sans-serif", // padrão global
  },

  fontWeight: {
    regular: "400",
    semibold: "600",
  },

  fontSize: {
    h4: ["20px", "28px"], // H4 - Semibold 600
    lg: ["16px", "24px"], // Large - Semibold 600
    body3: ["14px", "20px"], // Regular 400
    body4: ["14px", "20px"], // Semibold 600
    desc: ["12px", "16px"], // TextDescription - Regular 400
  },

  colors: {
    blue: {
      500: "#409EFF",
      800: "#006EE0",
    },

    blueGray: {
      50: "#F8FAFC",
      100: "#E2E8F0",
      200: "#CBD5E1",
    },

    gray: {
      50: "#FAFAF9",
      400: "#8C8C8C",
    },

    orange: {
      50: "#FEF6EE",
      100: "#FDEAD7",
    },

    fonts: {
      bold: { 600: "#020617" },
      semibold: { 600: "#334155" },
      regular: { 400: "#64748B" },
    },

    status: {
      danger: {
        light: "#FFE4E6",
        main: "#FB7185",
      },

      warning: {
        light: "#FEF7C3",
        main: "#EAAA08",
      },

      success: {
        light: "#DBECFF",
        main: "#409EFF",
      },
    },
  },

  spacing: {
    xs: "0.25rem", // 4px
    xsm: "0.375rem", // 6px
    smx: "0.625rem", // 10px
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
  },

  borderRadius: {
    md: "0.25rem", // 4px
    lg: "0.5rem", // 8px
  },
} as Theme;
