// import required libraries
const inquirer = require("inquirer");
const questions = require("./lib/questions");
const DBQuery = require("./db/src/queries");
// banner libraries
const banner = require("asciiart-logo");
const config = require("./package.json");

// set variable creating an instance of the DBQuery class for new db queries
const query = new DBQuery();
// render banner image
function renderBanner() {
  console.log(banner(config).render());
}

// start the app and present user with selection options
async function init() {
  const selection = await inquirer.prompt(questions.mainMenu);
  switch (selection.action) {
    case questions.mainMenu.choices[0]:
      query.viewEmployees();
      break;
    case questions.mainMenu.choices[1]:
      query.addEmployee();
      break;
    case questions.mainMenu.choices[2]:
      query.updateRole();
      break;
    case questions.mainMenu.choices[3]:
      query.viewRoles();
      break;
    case questions.mainMenu.choices[4]:
      query.addRole();
      break;
    case questions.mainMenu.choices[5]:
      query.viewDepts();
      break;
    case questions.mainMenu.choices[6]:
      query.addDept();
      break;
    case questions.mainMenu.choices[7]:
      break;
    default:
      text = "Please select a valid choice";
  }
}
// main function calls
renderBanner();
init();

module.exports = init;
