const fs = require("fs");

let listTable = (base, limit = 10) => {
  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";

    if (!Number(base)) {
      reject(`The value ${base} is not a number`);
      return;
    }

    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tables/table-${base}-al-${limit}.txt`, data, err => {
      if (err) reject(err);
      resolve(`table-${base}.txt`);
    });
  });
};

module.exports = {
  listTable,
  createFile
};
