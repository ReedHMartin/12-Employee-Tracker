// - Import MySQL2 package
const mysql = require("mysql2");

// Employee class to handle employee-related operations
class Employee {
  // Constructor takes a connection object as an argument
  constructor(pool) {
    this.pool = pool;
  }

  // Method for viewing all employees in a formatted table
  async viewAllEmployees() {
    const [rows] = await this.pool.execute(`
      SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id
      ORDER BY e.id;
    `);
    return rows;
  }
  
  // Method for adding a new employee to the database
  async addEmployee(firstName, lastName, roleId, managerId) {
    await this.pool.execute(`
      INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?, ?, ?, ?);
    `, [firstName, lastName, roleId, managerId]);
  }
}

// Export the Employee class
module.exports = Employee;
