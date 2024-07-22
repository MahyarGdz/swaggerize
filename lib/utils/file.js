"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeEslintConfig = exports.writeGitignore = exports.writeTsConfig = exports.writeCommitlintConfig = void 0;
const fs_1 = __importDefault(require("fs"));
const writeCommitlintConfig = () => {
  const content = `module.exports = { extends: ['@commitlint/config-conventional'] };`;
  fs_1.default.writeFileSync("commitlint.config.js", content);
};
exports.writeCommitlintConfig = writeCommitlintConfig;
const writeTsConfig = () => {
  const content = `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}`;
  fs_1.default.writeFileSync("tsconfig.json", content);
};
exports.writeTsConfig = writeTsConfig;
const writeGitignore = () => {
  const content = `node_modules
dist
.env
`;
  fs_1.default.writeFileSync(".gitignore", content);
};
exports.writeGitignore = writeGitignore;
const writeEslintConfig = () => {
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
  fs_1.default.writeFileSync(".eslintrc.json", content);
};
exports.writeEslintConfig = writeEslintConfig;
