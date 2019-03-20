
// setTimeout(() => {
//     console.log('Hello World')
// }, 3000);

let getUserById = (id, callback) => {
    let user = {
        name: 'Christian',
        id
    };

    if (id === 20) {
        callback(`User with id: ${id} does not exist in database`);
    }
    else {
        callback(null, user)
    }
}

getUserById(1, (error, user) => {
    if(error) {
        return console.log(error);
    }
    console.log('User from database ', user);
})