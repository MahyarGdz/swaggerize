"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const init_1 = require("./commands/init");
const package_json_1 = require("../package.json");
const ansi_colors_1 = require("ansi-colors");
const program = new commander_1.Command("configs-hell");
program
  .version(package_json_1.version)
  .description("CLI to set up project configurations easily")
  .showHelpAfterError((0, ansi_colors_1.red)("==> run with --help for additional information"))
  .addCommand(init_1.initCommand);
program.parse(process.argv);
process.stdin.on("data", (key) => {
  if (key.toString() === "\u0003") {
    process.stdout.write("\n" + (0, ansi_colors_1.red)("Process terminated by user."));
    process.exit(1);
  }
});
