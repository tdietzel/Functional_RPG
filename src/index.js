import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState, storeState, character, characterSelect } from "./js/character.js";
import { enemyType } from "./js/enemy.js";
import { battle } from "./js/battle.js";
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

function handleForm() {
  event.preventDefault();
  document.getElementById("playerSetup").setAttribute("class","hidden");
  document.getElementById("battleScreen").removeAttribute("class");
  const characterName = character(document.getElementById('playerName').value);
  const newCharacter = characterSelect(characterName)((document.querySelector("input[name='playerType']:checked").value).toLowerCase());
  myPlayer = newCharacter;
  printCharacterDetails();
}

function battleStarter() {
  // hide battle button
  // change battle status message
  // generate enemy and save to currentEnemy
  // pass both characters into battle.js
  // parse returned value into myPlayer and currentEnemy
  // call printCharacterDetails() and printEnemyDetails()
}

window.addEventListener("load", () => {
  document.getElementById('playerSetup').addEventListener('submit', handleForm);
  document.getElementById('startBattle').addEventListener('click', battleStarter);
});

console.log(changeState,storeState,character,characterSelect,enemyType,battle,levelCalc,levelPerks,addXP, printCharacterDetails,myPlayer,currentEnemy);