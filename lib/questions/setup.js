"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
const setupQuestions = async () => {
  const packageManagerQuestion = {
    message: "Choose a package manager:",
    choices: [
      {
        name: "npm",
        value: "npm",
      },
      {
        name: "yarn",
        value: "yarn",
      },
      {
        name: "pnpm",
        value: "pnpm",
      },
    ],
  };
  const typescriptQuestion = {
    message: "Do you want to use TypeScript?",
    default: true,
  };
  const huskyQuestion = {
    message: "Do you want to use Husky?",
    default: true,
  };
  const commitlintQuestion = {
    message: "Do you want to use CommitLint?",
    default: true,
  };
  const gitignoreQuestion = {
    message: "Do you want to generate a .gitignore file?",
    default: true,
  };
  const eslintQuestion = {
    message: "Do you want to use ESLint?",
    default: true,
  };
  const answers = {
    packageManager: await (0, prompts_1.select)(packageManagerQuestion),
    typescript: await (0, prompts_1.confirm)(typescriptQuestion),
    husky: await (0, prompts_1.confirm)(huskyQuestion),
    commitlint: await (0, prompts_1.confirm)(commitlintQuestion),
    gitignore: await (0, prompts_1.confirm)(gitignoreQuestion),
    eslint: await (0, prompts_1.confirm)(eslintQuestion),
  };
  return answers;
};
exports.default = setupQuestions;
