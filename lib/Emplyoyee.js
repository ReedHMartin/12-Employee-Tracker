
// - Import MySQL2 package
const mysql = require("mysql2");

// Employee class to handle employee-related operations
class Employee {
  // Constructor takes a connection object as an argument
  constructor(connection) {
    this.connection = connection;
  }

  // Method for viewing all employees in a formatted table
  viewAllEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }


// - Method for adding a new employee to the database.

// - Method for updating an employee's role.

}


// TODO: Export the Employee class
// - Make the Employee class available for other files to import and use.
