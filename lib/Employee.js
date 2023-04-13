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


  // Method for adding a new employee to the database
  addEmployee(firstName, lastName, roleId, managerId = null) {
    return this.connection.promise().query("INSERT INTO employee SET ?", {
      first_name: firstName,
      last_name: lastName,
      role_id: roleId,
      manager_id: managerId,
    });
  }
  
  // Method for updating an employee's role
  updateEmployeeRole(employeeId, newRoleId) {
    return this.connection.promise().query("UPDATE employee SET ? WHERE ?", [
      { role_id: newRoleId },
      { id: employeeId },
    ]);
  }
}

// Export the Employee class
module.exports = Employee;
