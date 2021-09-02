// import required libraries
const dbConnection = require("../config/connection");
const cTable = require("console.table");

// class holding all db query methods for use throughout the app
class DBQuery {
  constructor() {}
  viewEmployees() {
    const sqlQuery =
      'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,CONCAT (m.first_name," ", m.last_name) AS manager FROM employee LEFT JOIN employee as m ON m.id = employee.manager_id JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id';
    dbConnection.query(sqlQuery, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        return console.table(results);
      }
    });
  }
}

module.exports = DBQuery;
