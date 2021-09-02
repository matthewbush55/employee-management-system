// import required libraries
const inquirer = require("inquirer");
const questions = require("./lib/questions");

//testing
const init = async () => {
  const selection = await inquirer.prompt(questions.mainMenu);
  console.log(selection.mainMenu);
};

init();
