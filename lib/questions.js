// import required libraries
const inquirer = require("inquirer");

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

module.exports = main;
