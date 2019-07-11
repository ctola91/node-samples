const description = {
  demand: true,
  alias: "d",
  desc: "description of the task"
};

const completed = {
  alias: "c",
  default: false,
  desc: "change task to completed or pending"
};

const argv = require("yargs")
  .command("create", "Create task", {
    description
  })
  .command("delete", "Delete task", {
    description
  })
  .command("list", "list tasks", {
      completed
  })
  .command("update", "update task", {
    description,
    completed
  })
  .help().argv;

module.exports = {
  argv
};
