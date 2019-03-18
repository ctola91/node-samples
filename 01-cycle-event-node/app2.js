console.log('Start');

setTimeout( function () {
    console.log('First Timeout')
}, 3000);

setTimeout( function () {
    console.log('Second Timeout')
}, 0);

setTimeout( function () {
    console.log('Third Timeout')
}, 0);

console.log('End');