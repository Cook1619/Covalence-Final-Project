const fs = require('fs');
let games = { nextid: 0 };

if(fs.existsSync('scoreboard-mlb-2018-regular-20180514.json')) {
    games = JSON.parse(fs.readFileSync('scoreboard-mlb-2018-regular-20180514.json'));
}

let getGames = () => {
    return Object.assign({}, games); //create a copy and return it
}

let getGame = id => {
    return Object.assign({}, games[id]); //create a copy and return it
}

module.exports = {
    GetGames: getGames,
    GetGame: getGame,
}