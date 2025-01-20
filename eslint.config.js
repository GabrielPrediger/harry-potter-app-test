import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginTailwindCSS from "eslint-plugin-tailwindcss";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      tailwindcss: pluginTailwindCSS,
      extends: ["plugin:prettier/recommended"],
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginTailwindCSS.configs.recommended.rules,

      // Exemplo de regras personalizadas:
      "react/react-in-jsx-scope": "off", // Remove obrigatoriedade do React no escopo.
      "@typescript-eslint/no-unused-vars": "warn", // Warnings para variáveis não usadas.
      "tailwindcss/no-custom-classname": "off", // Permite classes personalizadas no Tailwind.
      "max-len": ["error", { code: 100 }], // Limita linhas a 100 caracteres.
    },
  },
];
