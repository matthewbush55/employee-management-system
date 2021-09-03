// import required libraries
const inquirer = require("inquirer");
const questions = require("./lib/questions");
const dbConnection = require("./config/connection");
const cTable = require("console.table");
// banner libraries
const banner = require("asciiart-logo");
const config = require("./package.json");

// render banner image
function renderBanner() {
  console.log(banner(config).render());
}

// start the app and present user with selection options
async function init() {
  console.log("\n");
  const selection = await inquirer.prompt(questions.mainMenu);
  switch (selection.action) {
    case questions.mainMenu.choices[0]:
      viewEmployees();
      break;
    case questions.mainMenu.choices[1]:
      addEmployee();
      break;
    case questions.mainMenu.choices[2]:
      updateRole();
      break;
    case questions.mainMenu.choices[3]:
      viewRoles();
      break;
    case questions.mainMenu.choices[4]:
      addRole();
      break;
    case questions.mainMenu.choices[5]:
      viewDepts();
      break;
    case questions.mainMenu.choices[6]:
      addDept();
      break;
    case questions.mainMenu.choices[7]:
      break;
    default:
      text = "Please select a valid choice";
  }
}

function viewEmployees() {
  const sqlQuery =
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,CONCAT (m.first_name," ", m.last_name) AS manager FROM employee LEFT JOIN employee as m ON m.id = employee.manager_id JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id';
  dbConnection.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("\n");
      console.table(results);
      init();
    }
  });
}

function viewRoles() {
  const sqlQuery = "SELECT id, title, salary, department_id FROM role";
  dbConnection.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.table(results);
      init();
    }
  });
}

function viewDepts() {
  const sqlQuery = "SELECT id, name FROM department";
  dbConnection.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.table(results);
    }
  });
}

// function to add a new employee
function addEmployee() {
  const sqlQuery = ("INSERT INTO employee SET ?", data);
  dbConnection.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.table(results);
      init();
    }
  });
}

// function to add a new role
async function addRole() {
  dbConnection.query("SELECT name FROM department", async (err, departments) => {
    const response = await inquirer.prompt(questions.addRoleQuestions(departments));

    // create variable to hold newRole object properties
    const newRole = {};
    newRole.title = response.new_role_title;
    newRole.salary = response.new_role_salary;

    dbConnection.query("SELECT id FROM department WHERE name = ?", response.new_role_dept, (err, response) => {
      newRole.department_id = response[0].id;
      const sqlQuery = "INSERT INTO role SET ?";
      dbConnection.query(sqlQuery, newRole, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Role Added");
          init();
        }
      });
    });
  });
}

// function to add a new department
async function addDept() {
  const sqlQuery = "INSERT INTO department SET ?";
  const response = await inquirer.prompt(questions.addDeptQuestions());
  dbConnection.query(sqlQuery, { name: response.new_dept_name }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Department added");
      init();
    }
  });
}

// function to update a role in the database
function updateRole() {}

// main function calls
renderBanner();
init();

module.exports = init;
