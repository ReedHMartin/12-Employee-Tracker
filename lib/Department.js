// - Import  MySQL2
const mysql = require("mysql2");

// Department class to handle department-related operations
class Department {
  // Constructor takes a connection object as an argument
  constructor(connection) {
    this.connection = connection;
  }

  // Method for viewing all departments in a formatted table
  viewAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  // Method for adding a new department to the database
  addDepartment(departmentName) {
    return this.connection.promise().query("INSERT INTO department SET ?", {
      name: departmentName,
    });
  }
}

// Export the Department class
module.exports = Department;
