// import required libraries
const dbConnection = require("../config/connection");
const cTable = require("console.table");
const init = require("../../server");

// class holding all db query methods for use throughout the app
class DBQuery {
  viewEmployees() {
    const sqlQuery =
      'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,CONCAT (m.first_name," ", m.last_name) AS manager FROM employee LEFT JOIN employee as m ON m.id = employee.manager_id JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id';
    dbConnection.query(sqlQuery, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.table(results);
        init();
      }
    });
  }

  async viewRoles() {
    const sqlQuery = "SELECT id, title, salary, department_id FROM role";
    await dbConnection.execute(sqlQuery, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        return console.table(results);
      }
    });
  }

  async viewDepts() {
    const sqlQuery = "SELECT id, name FROM department";
    await dbConnection.execute(sqlQuery, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        return console.table(results);
      }
    });
  }

  async addEmployee(data) {
    const sqlQuery = ("INSERT INTO employee SET ?", data);
    await dbConnection.execute(sqlQuery, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        return console.table(results);
      }
    });
  }

  addRole() {}

  addDept() {}

  updateRole() {}
}
module.exports = DBQuery;
