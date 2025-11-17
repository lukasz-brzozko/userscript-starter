export default {
  extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
  overrides: [
    {
      customSyntax: "postcss-styled-syntax",
      files: ["**/*.{js,jsx,ts,tsx}"],
    },
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
