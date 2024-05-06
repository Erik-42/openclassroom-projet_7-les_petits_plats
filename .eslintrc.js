import globals from "globals";
export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        myCustomGlobal: "readonly",
      },
    },
  },
];

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: "eslint:recommended",
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [".eslintrc.{js,cjs}"],
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   rules: {},
// };
