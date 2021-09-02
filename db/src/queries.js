// import required libraries
const dbConnection = require("../config/connection");
const cTable = require("console.table");

// class holding all db query methods for use throughout the app
class DBQuery {
  constructor(dbConnection) {
    this.dbconnection = dbConnection;
  }
  viewEmployees() {
    // ******* add JOIN to join all the tables *********
    this.dbconnection.query("SELECT * FROM employees", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        return cTable(results);
      }
    });
  }
}
