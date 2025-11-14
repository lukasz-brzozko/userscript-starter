export default {
  extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
  overrides: [
    {
      customSyntax: "postcss-styled-syntax",
      files: ["**/*.js"],
    },
  ],
};
