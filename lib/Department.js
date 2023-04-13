// - Import  MySQL2
const mysql = require("mysql2");

// Department class to handle department-related operations
class Department {
  // Constructor takes a connection object as an argument
  constructor(pool) {
    this.pool = pool;
  }

  // Method for viewing all departments in a formatted table
  async viewAllDepartments() {
    const [rows] = await this.pool.execute("SELECT * FROM department");
    return rows;
  }

  // Method for adding a new department to the database
  async addDepartment(name) {
    await this.pool.execute("INSERT INTO department (name) VALUES (?)", [name]);
  };
  }

// Export the Department class
module.exports = Department;
