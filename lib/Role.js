// - Import MySQL2
const mysql = require("mysql2");

// Role class to handle role-related operations
class Role {
  // Constructor takes a connection object as an argument
  constructor(connection) {
    this.connection = connection;
  }

  // Method for viewing all roles in a formatted table
  viewAllRoles() {
    return this.connection.promise().query("SELECT * FROM role");
  }

  // Method for adding a new role to the database
  addRole(title, salary, department_id) {
    return this.connection.promise().query("INSERT INTO role SET ?", {
      title: title,
      salary: salary,
      department_id: department_id,
    });
  }
}

// Export the Role class
module.exports = Role;
