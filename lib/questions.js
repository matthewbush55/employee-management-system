// import required libraries
const inquirer = require("inquirer");

// main menu questions
const main = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "main",
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
  },
];

// write 'add employee' questions

// write 'update employee role' questions

// write 'add role' questions

// write 'add department' questions

// write 'confirm quit' questions
module.exports = main;
