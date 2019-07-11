const argv = require("yargs")
  .command("create", "Create task", {
    description: {
        demand: true,
        alias: "d",
        desc: 'description of the task'
      },
  })
  .command("delete", "Delete task", {
    description: {
        demand: true,
        alias: "d",
        desc: 'Delete task by description'
      },
  })
  .command("list", "list tasks", {
  })
  .command("update", "update task", {
    description: {
      demand: true,
      alias: "d",
      desc: 'description of the task'
    },
    completed: {
      alias: "c",
      default: true,
      desc: 'change task to completed or pending'
    }
  })
  .help().argv;

module.exports = {
  argv
};
