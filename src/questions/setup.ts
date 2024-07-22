import { confirm, select } from "@inquirer/prompts";

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
    packageManager: await select(packageManagerQuestion),
    typescript: await confirm(typescriptQuestion),
    husky: await confirm(huskyQuestion),
    commitlint: await confirm(commitlintQuestion),
    gitignore: await confirm(gitignoreQuestion),
    eslint: await confirm(eslintQuestion),
  };

  return answers;
};

export default setupQuestions;
