const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let warrior = "Warrior";
let ranger = "Ranger";
let sorcerer = "Sorcerer";
let Orc = "Orc";

let hp_warrior = 150;
let hp_ranger = 120;
let hp_sorcerer = 100;
let hp_Orc = 200;

let damage_warrior = 125;
let damage_ranger = 100;
let damage_sorcerer = 250;
let damage_orc = 200;

let hp_dragon = 700;
let damage_dragon = 75;

function askQuestion(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

async function main() {
    let character;
    let my_hp;
    let my_damage;
    while (true) {
        character = await askQuestion('Choose your character: ');
        if (character == "Warrior") {   
            character = warrior;
            my_hp = hp_warrior;
            my_damage = damage_warrior;
            break;
        }
        if (character == "Ranger") {
            character = ranger;
            my_hp = hp_ranger;
            my_damage = damage_ranger;
            break;
        }
        if (character == "Sorcerer") {
            character = sorcerer;
            my_hp = hp_sorcerer;
            my_damage = damage_sorcerer;
            break;
        }
        if (character == "Orc") {
            character = Orc;
            my_hp = hp_Orc;
            my_damage = damage_orc;
            break;
        } else {
            console.log("Invalid character, please try again");
        }
    }
    console.log(`You have chosen the character: ${character}`);
    console.log(`Health: ${my_hp}`);
    console.log(`Damage: ${my_damage}`);

    while (true) {
        hp_dragon = hp_dragon - my_damage;
        console.log("The", character, "damaged the Dragon!");
        console.log(`Dragon damage is now: ${hp_dragon}`);
        console.log(" ");
    
        if (hp_dragon <= 0) {
            console.log("The Dragon has lost the battle!");
            break;
        }
    
        my_hp = my_hp - damage_dragon;
        console.log(`The dragon strikes back at ${character}!`);
        console.log(`${character} hits points are now: ${my_hp}`);
        console.log(" ");
    
        if (my_hp <= 0) {
            console.log(`The ${character} lost the battle!`);
            break;
        }
    }

    readline.close();
}

main();









