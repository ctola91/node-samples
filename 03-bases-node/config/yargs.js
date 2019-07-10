const options = {
  base: {
    demand: true,
    alias: "b"
  },
  limit: {
    alias: "l",
    default: 10
  }
};

const argv = require("yargs")
  .command("list", "Print in cli the table", options)
  .command("create", "create file in ./tables", options)
  .help().argv;

module.exports = {
  argv
};
