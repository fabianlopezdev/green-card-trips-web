import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  safelist: [
    // DaisyUI dynamic classes
    'avatar-group',
    'avatar',
    // Base theme classes
    'base-100',
    'base-200',
    'base-300',
    'base-content',
    'primary-content',
  ],
  theme: {
    screens: {
      "3xs": "350px",
      "2xs": "400px",
      xs: "475px",
      nav: "932px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sketch: ["CabinSketch", ...defaultTheme.fontFamily.mono],
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        logo: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: false,
    themes: [
      {
        "dark": {
          ...require("daisyui/src/theming/themes")["dark"],
          "--rounded-box": "1rem",        // Standardize border radius
        },
      },
      {
        "light": {
          ...require("daisyui/src/theming/themes")["corporate"],
          "primary": "#2800C8",           // rgb(40,0,200) - Lighter blue for buttons/gradients
          "secondary": "#EA3341",         // rgb(234,51,65) - Red
          "accent": "#05005D",            // rgb(5,0,93) - Original dark blue (available for future use)
          "--rounded-box": "1rem",        // Standardize border radius to match dark theme
        },
      },
    ],
  },
};
