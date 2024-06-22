const readline = require('readline');
const Player = require('./src/player');
const Arena = require('./src/arena');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getPlayerDetails = (playerName) => {
    return new Promise((resolve) => {
        rl.question(`Enter details for ${playerName} (name, health, strength, attack) separated by space: `, (input) => {
            const [name, health, strength, attack] = input.split(' ');
            resolve(new Player(name, parseInt(health), parseInt(strength), parseInt(attack)));
        });
    });
};

const main = async () => {
    console.log("Welcome to the Magical Arena Game!");

    const playerA = await getPlayerDetails('Player A');
    const playerB = await getPlayerDetails('Player B');

    const arena = new Arena();
    arena.fight(playerA, playerB);

    rl.close();
};

main();
