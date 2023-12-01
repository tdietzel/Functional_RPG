// What happens when players health reaches 0 or below?
// How can the enemy attack player?
// Figure out level scaling
// Figure out characters and enemy stats

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState, storeState, character, characterSelect } from "./js/character.js";
import { enemyType } from "./js/enemy.js";
import { battle, checkDeath } from "./js/battle.js";
import { levelCalc, levelPerks, addXP } from "./js/levelingSystem.js";

let myPlayer = {};
let currentEnemy = {};

function printCharacterDetails() {
  document.querySelector("#characterName").innerText = `${myPlayer.name}`;
  document.querySelector("span#playerHealthStat").innerText = `${myPlayer.health}`;
  document.querySelector("span#playerStrengthStat").innerText = `${myPlayer.strength}`;
  document.querySelector("span#playerIntelligenceStat").innerText = `${myPlayer.intelligence}`;
  document.querySelector("span#playerXPStat").innerText = `${myPlayer.xp}`;
  document.querySelector("span#playerLevelStat").innerText = `${myPlayer.level}`;
}

function resetEnemies() {
  currentEnemy = {};
  document.querySelector("h5#enemyType") ? document.querySelector("h5#enemyType").innerText = "No current enemy" : null;

  // --UPDATE Reset currentEnemy and print null?
  document.querySelector("p#enemyStatDisplay #enemyHealthStat").innerHTML = ``;
  document.querySelector("p#enemyStatDisplay #enemyStrengthStat").innerHTML = ``;
  document.querySelector("p#enemyStatDisplay #enemyIntelligenceStat").innerHTML = ``;
  document.querySelector("#battleStatusMessage").innerText = "No battle currently in progress. Start one now!";

  document.getElementById("startBattle").removeAttribute("class");
}

function printEnemyDetails() {
  document.querySelector("h5#enemyType").innerText = `${currentEnemy.type}`;
  document.querySelector("p#enemyStatDisplay #enemyHealthStat").innerHTML = `${currentEnemy.health}`;
  document.querySelector("p#enemyStatDisplay #enemyStrengthStat").innerHTML = `${currentEnemy.strength}`;
  document.querySelector("p#enemyStatDisplay #enemyIntelligenceStat").innerHTML = `${currentEnemy.intelligence}`;
}

function handleForm() {
  event.preventDefault();
  document.getElementById("playerSetup").setAttribute("class","hidden");
  document.getElementById("actionButtonsHolder").setAttribute("class","hidden");
  document.getElementById("battleScreen").removeAttribute("class");

  const characterName = character(document.getElementById('playerName').value);
  const newCharacter = characterSelect(characterName)((document.querySelector("input[name='playerType']:checked").value).toLowerCase());
  myPlayer = newCharacter;
  printCharacterDetails();
}

function battleStarter() {
  document.getElementById("actionButtonsHolder").removeAttribute("class");
  document.getElementById("startBattle").setAttribute("class","hidden");
  document.querySelector("#battleStatusMessage").innerText = `Battle started!`;

  // Update later to randomized or other system
  const newEnemy = enemyType("Swoopbird");
  currentEnemy = newEnemy;
  printEnemyDetails();

  document.querySelector("button#actionAttack").addEventListener('click', () => {
    currentEnemy = battle([myPlayer, currentEnemy])(0)("attacks");
    let battlePlayers = [myPlayer, currentEnemy];
    checkDeath(currentEnemy) ? (myPlayer = addXP(battlePlayers), resetEnemies(), printCharacterDetails()) : printEnemyDetails();
  });
  document.querySelector("button#actionBlock").addEventListener('click', () => {
    myPlayer = battle([myPlayer, currentEnemy])(0)("blocks");
    printCharacterDetails();
  });
  document.querySelector("button#actionFlee").addEventListener('click', () => {
    printCharacterDetails();
    resetEnemies();
  });

  printCharacterDetails();
  printEnemyDetails();
}

window.addEventListener("load", () => {
  document.querySelector("button#createCharacter").addEventListener('click', handleForm);
  document.getElementById('startBattle').addEventListener('click', battleStarter);
});


// Take out later
console.log(changeState,storeState,character,characterSelect,enemyType,battle,levelCalc,levelPerks,addXP, printCharacterDetails,myPlayer,currentEnemy);