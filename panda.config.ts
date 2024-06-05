import { defineConfig, defineGlobalStyles } from "@pandacss/dev"

// eslint-disable-next-line no-var
var globalCss = defineGlobalStyles({
  "*": { boxSizing: "border-box", fontFamily: "poppins" },
  "*:after": { boxSizing: "border-box", fontFamily: "poppins" },
  "*:before": { boxSizing: "border-box", fontFamily: "poppins" },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "offWhite",
    color: "raisinBlack",
    position: "relative",
  },
  html: {
    scrollBehavior: "smooth",
  },
  h1: { margin: 0 },
  h2: { margin: 0 },
  h3: { margin: 0 },
  h4: { margin: 0 },
  h5: { margin: 0 },
  h6: { margin: 0 },
  p: {
    margin: 0,
  },
})

export default defineConfig({
  globalCss,

  jsxFramework: "react",
  jsxStyleProps: "all",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          offWhite: { value: "#E9F1F7" },
          raisinBlack: { value: "#342E37" },
        },
        fonts: {
          poppins: { value: "var(--font-poppins), sans-serif" },
        },
        fontSizes: {
          xs: { value: "0.75rem" },
          sm: { value: "0.875rem" },
          rg: { value: "1rem" },
          lg: { value: "1.125rem" },
          xl: { value: "1.25rem" },
          "2xl": { value: "1.5rem" },
          "3xl": { value: "1.875rem" },
          "4xl": { value: "2.25rem" },
          "5xl": { value: "3rem" },
          "6xl": { value: "3.75rem" },
          "7xl": { value: "4.5rem" },
          "8xl": { value: "6rem" },
          "9xl": { value: "8rem" },
        },
        fontWeights: {
          hairline: { value: 100 },
          thin: { value: 200 },
          light: { value: 300 },
          normal: { value: 400 },
          medium: { value: 500 },
          semibold: { value: 600 },
          bold: { value: 700 },
          extrabold: { value: 800 },
          black: { value: 900 },
        },
        letterSpacings: {
          tighter: { value: "-0.05em" },
          tight: { value: "-0.025em" },
          normal: { value: "0" },
          wide: { value: "0.025em" },
          wider: { value: "0.05em" },
          widest: { value: "0.1em" },
        },
        lineHeights: {
          normal: { value: "normal" },
          none: { value: 1 },
          shorter: { value: 1.25 },
          short: { value: 1.375 },
          base: { value: 1.5 },
          tall: { value: 1.625 },
          taller: { value: "2" },
          "3": { value: ".75rem" },
          "4": { value: "1rem" },
          "5": { value: "1.25rem" },
          "6": { value: "1.5rem" },
          "7": { value: "1.75rem" },
          "8": { value: "2rem" },
          "9": { value: "2.25rem" },
          "10": { value: "2.5rem" },
        },
        spacing: {
          px: { value: "1px" },
          0.5: { value: "0.125rem" },
          1: { value: "0.25rem" },
          1.5: { value: "0.375rem" },
          2: { value: "0.5rem" },
          2.5: { value: "0.625rem" },
          3: { value: "0.75rem" },
          3.5: { value: "0.875rem" },
          4: { value: "1rem" },
          5: { value: "1.25rem" },
          6: { value: "1.5rem" },
          7: { value: "1.75rem" },
          8: { value: "2rem" },
          9: { value: "2.25rem" },
          10: { value: "2.5rem" },
          12: { value: "3rem" },
          14: { value: "3.5rem" },
          16: { value: "4rem" },
          20: { value: "5rem" },
          24: { value: "6rem" },
          28: { value: "7rem" },
          32: { value: "8rem" },
          36: { value: "9rem" },
          40: { value: "10rem" },
          44: { value: "11rem" },
          48: { value: "12rem" },
          52: { value: "13rem" },
          56: { value: "14rem" },
          60: { value: "15rem" },
          64: { value: "16rem" },
          72: { value: "18rem" },
          80: { value: "20rem" },
          96: { value: "24rem" },
        },
        radii: {
          none: { value: "0" },
          sm: { value: "0.125rem" },
          base: { value: "0.25rem" },
          md: { value: "0.375rem" },
          lg: { value: "0.5rem" },
          xl: { value: "0.75rem" },
          "2xl": { value: "1rem" },
          "3xl": { value: "1.5rem" },
          full: { value: "100%" },
        },
        zIndex: {
          hide: { value: -1 },
          auto: { value: "auto" },
          base: { value: 0 },
          docked: { value: 10 },
          dropdown: { value: 1000 },
          sticky: { value: 1100 },
          banner: { value: 1200 },
          overlay: { value: 1300 },
          modal: { value: 1400 },
          popover: { value: 1500 },
          skipLink: { value: 1600 },
          toast: { value: 1700 },
          tooltip: { value: 1800 },
        },
      },
      keyframes: {
        collapsibleReveal: {
          "0%": { height: 0 },
          "100%": { height: "var(--radix-collapsible-content-height)" },
        },
        collapsibleClose: {
          "0%": { height: "var(--radix-collapsible-content-height)" },
          "100%": { height: 0 },
        },
        chevronFlip: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
