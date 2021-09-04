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
const addEmployeeQuestions = (roles, managers) => [
  {
    type: "input",
    message: "What is the employee's first name?",
    name: "first_name",
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "last_name",
  },
  {
    type: "list",
    message: "What is the employee's role?",
    name: "role",
    choices: roles,
  },
  {
    type: "list",
    message: "Who is the employee's manager?",
    name: "manager",
    choices: managers,
  },
];
// write 'update employee role' questions
const updateEmpRoleQuestions = (employees, roles) => [
  {
    type: "list",
    message: "Which employee's role do you want to update?",
    name: "employee",
    choices: employees,
  },
  {
    type: "list",
    message: "Which role do you want to assign the selected employee?",
    name: "role",
    choices: roles,
  },
];

// write 'add role' questions
const addRoleQuestions = (departments) => [
  {
    type: "input",
    message: "What is the name of the role?",
    name: "new_role_title",
  },
  {
    type: "input",
    message: "What is the salary of the role?",
    name: "new_role_salary",
  },
  {
    type: "list",
    message: "Which department does the role belong to?",
    name: "new_role_dept",
    choices: departments,
  },
];
// write 'add department' questions
const addDeptQuestions = () => [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "new_dept_name",
  },
];
// write 'confirm quit' questions
module.exports = {
  mainMenu: mainMenu,
  addEmployeeQuestions: addEmployeeQuestions,
  addRoleQuestions: addRoleQuestions,
  addDeptQuestions: addDeptQuestions,
  updateEmpRoleQuestions: updateEmpRoleQuestions,
};
