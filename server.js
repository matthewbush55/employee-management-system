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
      console.log("Please press CTRL + C to quit");
      return;
    default:
      text = "Please select a valid choice";
  }
}

function viewEmployees() {
  const sqlQuery =
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,CONCAT (m.first_name," ", m.last_name) AS manager FROM employee LEFT JOIN employee as m ON m.id = employee.manager_id JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY id';
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
  const sqlQuery =
    "SELECT role.id, role.title, department.name, role.salary FROM role JOIN department ON role.department_id = department.id ORDER BY id";
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
  const sqlQuery = "SELECT id, name FROM department ORDER BY id";
  dbConnection.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.table(results);
      init();
    }
  });
}

async function addEmployee() {
  //select roles from the database to pass into question choices
  const roleQuery = "SELECT title AS name FROM role";
  dbConnection.query(roleQuery, async (err, roles) => {
    //select managers from the db to pass into question choices
    const mgrQuery = 'SELECT CONCAT (first_name," ", last_name) as name FROM employee WHERE manager_id IS NULL';
    dbConnection.query(mgrQuery, async (err, managers) => {
      const answers = await inquirer.prompt(questions.addEmployeeQuestions(roles, managers));
      const newEmployee = {};
      newEmployee.first_name = answers.first_name;
      newEmployee.last_name = answers.last_name;
      dbConnection.query("SELECT id FROM role WHERE title = ?", answers.role, (err, response) => {
        newEmployee.role_id = response[0].id;

        dbConnection.query(
          'SELECT id FROM employee WHERE CONCAT (first_name," ", last_name) = ?',
          answers.manager,
          (err, response) => {
            newEmployee.manager_id = response[0].id;

            dbConnection.query("INSERT INTO employee SET ?", newEmployee, (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Employee Added");
                init();
              }
            });
          }
        );
      });
    });
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

// TODO: function to update a role in the database
async function updateRole() {
  // query database for all employees to pass into questions
  const empQuery = 'SELECT CONCAT (first_name," ", last_name) as name FROM employee';
  dbConnection.query(empQuery, async (err, employees) => {
    const roleQuery = "SELECT title AS name FROM role";
    dbConnection.query(roleQuery, async (err, roles) => {
      const answers = await inquirer.prompt(questions.updateEmpRoleQuestions(employees, roles));
      dbConnection.query("SELECT id FROM role WHERE title = ?", answers.role, (err, response) => {
        console.log(answers);
        const newRole = {};
        newRole.role_id = response[0].id;
        console.log(newRole);
        if (err) {
          console.log(err);
        } else {
          console.log("Role Updated");
          init();
        }
        //TODO: take output of new role assignment and tie it to the employee --- have to look up employee by splitting their name back into first_name & last_name
      });
    });
  });
}

renderBanner();
init();

module.exports = init;
