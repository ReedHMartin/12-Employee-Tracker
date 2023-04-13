// - Import required packages
// - Import Mysql
const mysql = require('mysql2/promise');
// Load environment variables from .env file
require("dotenv").config();
// - Import inquirer
const inquirer = require("inquirer");
// - Import console.table
const cTable = require("console.table");

// - Import the Department, Employee, and Role classes
const Department = require("./lib/Department");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");

const { DB_NAME } = process.env;

// Set up inquirer prompt configurations for main menu
const mainMenuPrompt = [
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Exit",
      ],
    },
  ];

// Function to initialize the application
async function init() {
    const { action } = await inquirer.prompt(mainMenuPrompt);
    switch (action) {
      case "View All Departments":
        viewAllDepartments();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "View All Employees":
        viewAllEmployees();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Update Employee Role":
        updateEmployeeRole();
        break;
      case "Exit":
        process.exit();
        break;
      default:
        console.log("Invalid option, please try again.");
        init();
        break;
    }
  }
    
  // Function to view all departments
  async function viewAllDepartments() {
    const departments = await department.viewAllDepartments();
    console.table(departments);
    init();
  }
  
  // Function to view all roles
  async function viewAllRoles() {
    const roles = await role.viewAllRoles();
    console.table(roles);
    init();
  }
  
  // Function to view all employees
  async function viewAllEmployees() {
    const employees = await employee.viewAllEmployees();
    console.table(employees);
    init();
  }

  // Function to add a department
  async function addDepartment() {
    const { departmentName } = await inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Enter the department name:",
      },
    ]);
    await department.addDepartment(departmentName);
    console.log("Department added!");
    init();
  }

// Function to add a role
async function addRole() {
  // Prompt for role information
  const departments = await department.viewAllDepartments();
  const departmentChoices = departments.map((dept) => ({
    name: dept.name,
    value: dept.id,
  }));

  const { title, salary, departmentId } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the role title:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter the role salary:",
    },
    {
      type: "list",
      name: "departmentId",
      message: "Select the department for this role:",
      choices: departmentChoices,
    },
  ]);

  await role.addRole(title, salary, departmentId);
  console.log("Role added!");
  init();
}

// Function to add an employee
async function addEmployee() {
  const roles = await role.viewAllRoles();
  const roleChoices = roles.map((role) => ({
    name: role.title,
    value: role.id,
  }));

  const employees = await employee.viewAllEmployees();
  const employeeChoices = employees.map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));

  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter the employee's first name:",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter the employee's last name:",
    },
    {
      type: "list",
      name: "roleId",
      message: "Select the employee's role:",
      choices: roleChoices,
    },
    {
      type: "list",
      name: "managerId",
      message: "Select the employee's manager:",
      choices: [{ name: "None", value: null }, ...employeeChoices],
    },
  ]);

  await employee.addEmployee(firstName, lastName, roleId, managerId);
  console.log("Employee added!");
  init();
}

// Function to update an employee's role
async function updateEmployeeRole() {
  const employees = await employee.viewAllEmployees();
  const employeeChoices = employees.map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));

  const roles = await role.viewAllRoles();
  const roleChoices = roles.map((role) => ({
    name: role.title,
    value: role.id,
  }));

  const { employeeId, newRoleId } = await inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Select the employee whose role you want to update:",
      choices: employeeChoices,
    },
    {
      type: "list",
      name: "newRoleId",
      message: "Select the employee's new role:",
      choices: roleChoices,
    },
  ]);

  await employee.updateEmployeeRole(employeeId, newRoleId);
  console.log("Employee role updated!");
  init();
}
  
const department = new Department();
const employee = new Employee();
const role = new Role();

  init();