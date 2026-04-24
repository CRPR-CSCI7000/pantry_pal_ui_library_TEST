/**
 * Color tokens — mirrors src/styles/colors.css.
 * Import these in JS where you need programmatic access to the design tokens.
 * The CSS variables themselves are injected via colors.css (included in the build).
 */

export const COLORS = {
  // Coffee palette
  coffeeDark: "#3A2618",
  coffeeMedium: "#6F4E37",
  coffeeLight: "#9B7653",
  coffeeCream: "#E6D2B5",
  coffeeEspresso: "#241811",

  // Backgrounds
  bgPrimary: "#F8F4E9",
  bgSecondary: "#EFE6D5",

  // Text
  textPrimary: "#241811",
  textSecondary: "#6F4E37",
  textLight: "#F8F4E9",

  // Accents
  accentPrimary: "#C87D55",
  accentSecondary: "#A67B5B",

  // Status
  success: "#4A7C59",
  warning: "#D4AC6E",
  error: "#A64B2A",
  info: "#6A8CAF",

  // Surface and border tokens
  surfaceRaised: "#FFFFFF",
  borderSubtle: "#D6C9B0",
};
