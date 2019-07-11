const argv = require("./config/yargs").argv;
const create = require("./to-do").create;

let command = argv._[0];

console.log(argv);

switch (command) {
  case "create":
    let task = create(argv.description);
    console.log(task);
    break;
  case "update":
    console.log("update");
    break;
  default:
    console.log("command not found");
    break;
}
