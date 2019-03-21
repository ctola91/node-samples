const fs = require('fs');

let base = 5;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base*i}\n`;
}

fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
    if(err) throw err;
    console.log('The file has been sabed');
});