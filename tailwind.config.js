/* eslint-disable global-require,@typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    colors: {
      white: "#E9F2EA",
      black: "#333333",
      current: "currentColor",
      transparent: "transparent",
      gray: "#e0dfdc",
      red: {
        100: "#ead6d6",
        200: "#d6adad",
        300: "#c18484",
        400: "#ad5b5b",
        500: "#993333",
        600: "#7a2828",
        700: "#5b1e1e",
        800: "#3d1414",
        900: "#1e0a0a",
      },
    },
    linearGradientColors: (theme) => theme("colors"),
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#993333",
              textDecoration: "underline",
              "&:hover": {
                color: "#ad5b5b",
              },
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/ui"), require("tailwindcss-gradients")],
};
