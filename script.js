const totalOptions = 5;
let choiceTree = [];

const message1 = "You have intel that pirates are targeting a mining operation in the system.\n You have just arrived at the first astroid belt, no hostiles are detected.";
const choice1a = "Warp to the next astroid belt";
const choice1b = "Stay here and see if anyone shows up";
const correct1 = 1;
const correctPrompt1 = "Warp Drive Engaged.... prepare for anything";
const wrongPrompt1 = "The pirates hit a mining ship in one of the other belts! They win this time...";
const Option1 = [message1, choice1a, choice1b, correct1, correctPrompt1, wrongPrompt1];
OptionADD(Option1);

const message2 = "A Neutral Faction is training new frigate pilots here";
const choice2a = "New Pilots? More like easy targets. Open Fire!";
const choice2b = "Continue to next belt.";
const correct2 = 2;
const correctPrompt2 = "Warp Drive Engaged.... prepare for anything";
const wrongPrompt2 = "You lock target and fire upon neutral ships. Your rapdid fire missiles make quick work of the inexperienced frigates. \n You nearly sparked a galactic war. You have been dishonorably discharged and locked in a cell, you monster...";
const Option2 = [message2, choice2a, choice2b, correct2, correctPrompt2, wrongPrompt2];
OptionADD(Option2);

const message3 = "You spot an enemy pirate in a Machariel class battleship. They immediately begin to target lock you";
const choice3a = "Fly directly at them to get in weapons range.";
const choice3b = "Approach slowly, using asteroids for cover.";
const correct3 = 2;
const correctPrompt3 = "They fire upon you once fully locked. Your movement allowed your ship to dodge the incoming artilery shots.";
const wrongPrompt3 = "They immediatly fired artilery shots at you when you began the approach. Your ship has been destroyed and the lives of your crew forfiet. That wasn't very tactical...";
const Option3 = [message3, choice3a, choice3b, correct3, correctPrompt3, wrongPrompt3];
OptionADD(Option3);

const message4 = "You have made it in to weapons range";
const choice4a = "Overload weapons, divert all power to Neutron Blasters";
const choice4b = "Activate Warp Scrambler and call for reinforcements";
const correct4 = 2;
const correctPrompt4 = "You transmit coordinates to the fleet. Reinforcements should arrive soon...";
const wrongPrompt4 = "The battleship launches attack drones, your overloaded weapons have drained the capacitor and left you vulnerable...";
const Option4 = [message4, choice4a, choice4b, correct4, correctPrompt4, wrongPrompt4];
OptionADD(Option4);

const message5 = "The pirate hails you on coms and offers a considerable amount of cash if you let them go...";
const choice5a = "Take the money.";
const choice5b = "Keep them held down.";
const correct5 = 2;
const correctPrompt5 = "Your fleet arrives and quickly dispatches the target. Well done, crisis averted!";
const wrongPrompt5 = "You tell the fleet the pirate jammed you and got away. You head straight to the casino once you make it back to port. You lose it all on a bad bet, damn.";
const Option5 = [message5, choice5a, choice5b, correct5, correctPrompt5, wrongPrompt5];
OptionADD(Option5);

function choiceOption(message, opt1, opt2, correctOpt, corPrompt, wrongPrompt) {
    let fullOption = {
        m: message,
        c1: opt1,
        c2: opt2,
        ra: correctOpt,
        rp: corPrompt,
        wp: wrongPrompt,
    }
    choiceTree.push(fullOption)
}
function OptionADD(option) {
    choiceOption(option[0], option[1], option[2], option[3], option[4], option[5]);
}

function DisplayIt(optNum) {
    let displayPrompt = choiceTree[optNum].m + "\n What will you do?\n"+ "\n 1. " + choiceTree[optNum].c1 + "\n 2. " + choiceTree[optNum].c2;
    let userInput = prompt(displayPrompt);
    if (userInput == choiceTree[optNum].ra) {
        alert(choiceTree[optNum].rp);
        if (optNum == totalOptions - 1) {
            if (confirm("Good Job! This system is now free of pirates. Do you want to Play Again?")) {
            DisplayIt(0);
            }
        } else {
            DisplayIt(optNum + 1);
        }
    } else {
        alert("GAME OVER - You Lose" + "\n\n " + choiceTree[optNum].wp);
        if (confirm("Play Again?")) {
            DisplayIt(0);
        }
    }
}