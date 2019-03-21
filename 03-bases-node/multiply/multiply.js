const fs = require('fs');



createFile = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if(!Number(base)) {
            reject(`The value ${base} is not a number`);
            return;
        }

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if(err) reject(err);
            resolve(`table-${base}.txt`);
        });
    })
}

module.exports = {
    createFile
}
