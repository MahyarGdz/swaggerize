import fs from "fs";

export const writeCommitlintConfig = () => {
  const content = `module.exports = { extends: ['@commitlint/config-conventional'] };`;
  fs.writeFileSync("commitlint.config.js", content);
};

export const writeTsConfig = () => {
  const content = `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}`;
  fs.writeFileSync("tsconfig.json", content);
};

export const writeGitignore = () => {
  const content = `node_modules
dist
.env
`;
  fs.writeFileSync(".gitignore", content);
};

export const writeEslintConfig = () => {
  const content = `{
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2020
  }
}`;
  fs.writeFileSync(".eslintrc.json", content);
};
