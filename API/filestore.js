const fs = require('fs');
let users = { nextid: 0 };

if(fs.existsSync('users.json')) {
    users = JSON.parse(fs.readFileSync('users.json'));
}

let getUser = () => {
    return Object.assign({}, users); //create a copy and return it
}

let getUser = id => {
    return Object.assign({}, users[id]); //create a copy and return it
}

let createUser = (user) => {
    users[users.nextid++] = user;
    writeUsers();
};

let updateUser = (id, user) => {
    users[id] = user;
    writeUsers();
}

let deleteUser = id => {
    delete users[id];
    writeUsers();
}

let writeUsers = () => {
    fs.writeFileSync('users.json', JSON.stringify(users));
};

module.exports = {
    createUser: createUser,
    deleteUser: deleteUser,
    getUsers: getUsers,
    getUser: getUser,
    updateUser: updateUser
}