const fs = require("fs");

let listToDo = [];

const saveDB = () => {
  let data = JSON.stringify(listToDo);

  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("Can't save information", err);
  });
};

const create = description => {
  let toDo = {
    description,
    completed: false
  };
  listToDo.push(toDo);

  saveDB();

  return toDo;
};

module.exports = {
  create,
  saveDB
};
