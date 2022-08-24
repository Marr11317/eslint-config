module.exports = {
  extends: [
    "@antfu/eslint-config",
  ],
  rules: {
    "semi": [
      "error",
      "always",
    ],
    "quotes": [
      "error",
      "double",
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
    ],
    "@typescript-eslint/semi": [
      "error",
      "always",
    ],
  },
};
