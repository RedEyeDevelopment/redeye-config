// @redeye/config/eslint
// Usage: import redeyeConfig from '@redeye/config/eslint'
// In eslint.config.mjs: export default [...redeyeConfig]

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    rules: {
      // TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],

      // General
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
    },
  },
];

export default config;
