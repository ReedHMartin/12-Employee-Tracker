// - Import MySQL2
const mysql = require("mysql2");

// Role class to handle role-related operations
class Role {
  // Constructor takes a connection object as an argument
  constructor(pool) {
    this.pool = pool;
  }

  // Method for viewing all roles in a formatted table
  async viewAllRoles() {
    const [rows] = await this.pool.execute("SELECT * FROM role");
    return rows;
  }

  // Method for adding a new role to the database
  async addRole(title, salary, department_id) {
    await this.pool.execute("INSERT INTO role SET ?", {
      title: title,
      salary: salary,
      department_id: department_id,
    });
  }
}

// Export the Role class
module.exports = Role;
