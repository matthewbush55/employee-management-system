// import required libraries
const inquirer = require("inquirer");

// main menu questions
const mainMenu = {
  type: "list",
  message: "What would you like to do?",
  name: "action",
  choices: [
    "View All Employees",
    "Add Employee",
    "Update Employee Role",
    "View All Roles",
    "Add Role",
    "View All Departments",
    "Add Department",
    "Quit",
  ],
};

// write 'add employee' questions
const addEmployee = (roles, employees) => [
  {
    type: "input",
    messgae: "What is the employee's first name?",
    name: "first_name",
  },
  {
    type: "input",
    messgae: " What is the employee's last name?",
    name: "last_name",
  },
  {
    type: "list",
    message: "What is the employee's role?",
    name: "role_id",
    choices: roles,
  },
  {
    type: "list",
    message: "Who is the employee's manager?",
    name: "manager_id",
    choices: employees,
  },
];
// write 'update employee role' questions

// write 'add role' questions
const addRole = () => [
  {
    type: "input",
    message: "What is the name of the role?",
    name: "new_role_name",
  },
  {
    type: "input",
    message: "What is the salary of the role?",
    name: "salary",
  },
  {
    type: "input",
    message: "Which department does the role belong to?",
    name: "new_role_dept",
  },
];
// write 'add department' questions
const addDept = () => [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "new_dept_name",
  },
];
// write 'confirm quit' questions
module.exports = {
  mainMenu: mainMenu,
  addEmployee: addEmployee,
  addRole: addRole,
  addDept: addDept,
};

// ************** //
// async function addEmployeeQuestions() {
//   return inquirer.prompt([
//     {
//       type: "input",
//       message: "What is the employee first name?",
//       name: "firstName",
//     },
//   ]).then((response) => {
//     const data = {
//         firstName = response.firstName
//     }
//     db.addEmployeeToDB(data)
//   })
// }
