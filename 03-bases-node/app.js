const argv = require('yargs')
                .command('list', 'Print in cli the table', {
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limit: {
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv;

const { createFile } = require('./multiply/multiply');

console.log(argv.limit);

// let param = argv[2];
// let base = param.split('=')[1];



// createFile(base)
//     .then(file => console.log(`File created: ${file}`))
//     .catch(e => console.log(e));