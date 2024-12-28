import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 10 + 1);
console.log("\n\twelcome to the GAME \n");
const Answer = await inquirer.prompt([
    {
        name: "NumberGuessing",
        type: "number",
        message: "please guessing a number between 1-10:",
    },
]);
console.log(Answer);
if (Answer.NumberGuessing === RandomNumber) {
    console.log("congrulation! you Guessed right answer.");
}
else {
    console.log("you Guessed wrong ANSWER.");
}
