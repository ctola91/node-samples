const argv = require("./config/yargs").argv;

const { createFile, listTable } = require("./multiply/multiply");

let command = argv._[0];

switch (command) {
  case "list":
    listTable(argv.base, argv.limit);
    break;
  case "create":
    createFile(argv.base, argv.limit)
      .then(file => console.log(`File created: ${file}`))
      .catch(e => console.log(e));
    break;
  default:
    console.log("command not found");
}

// console.log(argv.limit);

// let param = argv[2];
// let base = param.split('=')[1];
