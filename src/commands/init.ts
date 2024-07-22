import { Command } from "commander";
import shell from "shelljs";
import setupQuestions from "../questions/setup";
import { green } from "ansi-colors";
// import { writeCommitlintConfig, writeTsConfig, writeGitignore, writeEslintConfig } from "../utils/file";

const initCommand = new Command("init").description("Setup project configurations").action(setupAction);

// function write(file, str, mode) {
//   fs.writeFileSync(file, str, { mode: mode || MODE_0666 });
//   console.log("   \x1b[36mcreate\x1b[0m : " + file);
// }
// /**
//  * Determine if launched from cmd.exe
//  */

// function launchedFromCmd() {
//   return process.platform === "win32" && process.env._ === undefined;
// }
// const pkg = {
//   name: name,
//   version: "0.0.0",
//   private: true,
//   scripts: {
//     start: "node ./bin/www",
//   },
//   dependencies: {
//     debug: "~2.6.9",
//     express: "~4.16.1",
//   },
// };
async function setupAction() {
  const answers = await setupQuestions();

  console.log(green("prepare the package manager\n"));
  shell.exec(`corepack prepare ${answers.packageManager}@latest --activate `);
  //

  if (answers.typescript) {
    console.log(green("installing typescript"));
    shell.exec(`corepack ${answers.packageManager} i -D typescript`);
  }

  if (answers.commitlint) {
    console.log(green("installing commitlint"));
    shell.exec(`corepack ${answers.packageManager} i -D @commitlint/cli @commitlint/config-conventional`);
  }

  if (answers.eslint && answers.typescript) {
    console.log(green("installing eslint and ts parser for that"));
    shell.exec(`corepack ${answers.packageManager} i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint`);
  }

  if (answers.husky) {
    console.log(green("installing husky"));
    shell.exec("corepack ${answers.packageManager} i -D husky");
    shell.exec("husky init");
  }

  // if (answers.gitignore) {
  //   console.log(green("installing husky"));
  //   shell.exec("corepack ${answers.packageManager} i -D husky");
  //   shell.exec("husky init");
  // }

  console.log("All selected configurations are set up successfully.");
}
// async function preparePackageManager(name: string) {
//   // shell.exec("corepack enable");
//   shell.exec(`corepack prepare ${name}@latest --activate `);
// }

export { initCommand };
