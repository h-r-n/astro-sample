const theme = require("./src/config/theme.json");

let font_base = Number(theme.fonts.font_size.base.replace("px", ""));
let font_scale = Number(theme.fonts.font_size.scale);
let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;

let fontPrimaryType, fontSecondaryType;
if (theme.fonts.font_family.primary) {
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        text: theme.colors.default.text_color.default,
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        primary: theme.colors.default.theme_color.primary,
        secondary: theme.colors.default.theme_color.secondary,
        body: theme.colors.default.theme_color.body,
        border: theme.colors.default.theme_color.border,
        "theme-light": theme.colors.default.theme_color.theme_light,
        "theme-dark": theme.colors.default.theme_color.theme_dark,
      },
      fontSize: {
        base: font_base + "px", // 16px
        h1: h1 + "rem", // 48.8281px
        "h1-sm": h1 * 0.8 + "rem", // 39.0625px
        "h1-prose": 24 + "px",
        "h1-prose-sm": 18 + "px",
        h2: h2 + "rem", // 39.0625px
        "h2-sm": h2 * 0.8 + "rem", // 31.25px
        "h2-prose": 22 + "px",
        "h2-prose-sm": 17 + "px",
        h3: h3 + "rem", // 31.25px
        "h3-sm": h3 * 0.8 + "rem", // 25px
        "h3-prose": 20 + "px",
        "h3-prose-sm": 16 + "px",
        h4: h4 + "rem", // 25px
        h5: h5 + "rem", // 1.25rem(20px)
        h6: h6 + "rem", // 1rem(16px)
        'xs-fit': ['12px', '12px'],
        'sm-fit': ['14px', '14px'],
        'base-fit': ['16px', '16px'],
        'lg-fit': ['18px', '18px'],
        'xl-fit': ['20px', '20px'],
        '2xl-fit': ['24px', '24px'],
      },
      fontFamily: {
        primary: ["var(--font-primary)", fontPrimaryType],
        secondary: ["var(--font-secondary)", fontSecondaryType],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
  ],
};
