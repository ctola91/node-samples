const fs = require("fs");

let listToDo = [];

const saveDB = () => {
  let data = JSON.stringify(listToDo);

  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("Can't save information", err);
  });
};

const loadDB = () => {
  try {
    listToDo = require("./db/data.json");
  } catch (err) {
    listToDo = [];
  }
};

const getTasks = () => {
  loadDB();
  return listToDo;
};

const update = (description, completed = true) => {
  loadDB();
  let index = listToDo.findIndex(task => task.description === description);
  if (index >= 0) {
    listToDo[index].completed = completed;
    saveDB();
    return true;
  } else {
    return false;
  }
};

const deleteTask = description => {
  loadDB();
  let filteredList = listToDo.filter(task => task.description !== description);
  if (filteredList.length === listToDo.length) return false;
  listToDo = filteredList;
  saveDB();
  return true;
};

const create = description => {
  loadDB();

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
  getTasks,
  update,
  deleteTask
};
