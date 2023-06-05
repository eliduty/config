module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  overrides: [
    {
      files: ["**/*.{html,htm,vue}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.less"],
      customSyntax: "postcss-less",
    },
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "deep"],
      },
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "function",
          "if",
          "each",
          "include",
          "mixin",
          "for",
          "extend",
          "apply",
          "layer",
          "tailwind",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "no-duplicate-selectors": null,
    "no-empty-source": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"],
      },
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["lines"],
      },
    ],
    "media-feature-name-no-unknown": [
      true,
      {
        ignoreMediaFeatureNames: "min-device-pixel-ratio",
      },
    ],
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["rpx"],
      },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["theme", "v-bind"],
      },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
  },
};
