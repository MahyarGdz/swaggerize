"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCommand = void 0;
const commander_1 = require("commander");
const shelljs_1 = __importDefault(require("shelljs"));
const setup_1 = __importDefault(require("../questions/setup"));
const ansi_colors_1 = require("ansi-colors");
const initCommand = new commander_1.Command("init").description("Setup project configurations").action(setupAction);
exports.initCommand = initCommand;
async function setupAction() {
  const answers = await (0, setup_1.default)();
  console.log((0, ansi_colors_1.green)("prepare the package manager\n"));
  shelljs_1.default.exec(`corepack prepare ${answers.packageManager}@latest --activate `);
  if (answers.typescript) {
    console.log((0, ansi_colors_1.green)("installing typescript"));
    shelljs_1.default.exec(`corepack ${answers.packageManager} i -D typescript`);
  }
  if (answers.commitlint) {
    console.log((0, ansi_colors_1.green)("installing commitlint"));
    shelljs_1.default.exec(`corepack ${answers.packageManager} i -D @commitlint/cli @commitlint/config-conventional`);
  }
  if (answers.eslint && answers.typescript) {
    console.log((0, ansi_colors_1.green)("installing eslint and ts parser for that"));
    shelljs_1.default.exec(`corepack ${answers.packageManager} i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint`);
  }
  if (answers.husky) {
    console.log((0, ansi_colors_1.green)("installing husky"));
    shelljs_1.default.exec("corepack ${answers.packageManager} i -D husky");
    shelljs_1.default.exec("husky init");
  }
  console.log("All selected configurations are set up successfully.");
}
