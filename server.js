// import required libraries
const inquirer = require("inquirer");
const questions = require("./lib/questions");
const DBQuery = require("./db/src/queries");
const { mainMenu } = require("./lib/questions");

// set variable to user for new db queries
const query = new DBQuery();

async function init() {
  const selection = await inquirer.prompt(questions.mainMenu);
  switch (selection.action) {
    case mainMenu.choices[0]:
      query.viewEmployees();
      break;
  }
}

init();
