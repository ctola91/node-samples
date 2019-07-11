const argv = require("./config/yargs").argv;
const {create, getTasks, update, deleteTask } = require("./to-do");
// const getTasks = require('./to-do');
const colors = require('colors');
let command = argv._[0];

switch (command) {
  case "create":
    let task = create(argv.description);
    console.log(task);
    break;
  case "list":
    let tasks = getTasks();
    for (let task of tasks) {
        console.log('========== To Do =========='.green);
        console.log(task.description);
        console.log('Status: ', task.completed);
        console.log('==========================='.green);

    }
    break;
  case "update":
        let updated = update(argv.description, argv.completed);
        console.log(updated);
    break;
case 'delete':
    let deleted = deleteTask(argv.description);
    console.log(deleted);
    break;
  default:
    console.log("command not found");
    break;
}
