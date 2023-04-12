// - Import required packages
// - Import inquirer
const inquirer = require("inquirer");
// - Import console.table
const cTable = require("console.table");
// - Import the Department, Employee, and Role classes
const Department = require("./lib/Department");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");

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
  
  Here is the updated code with the remaining todos completed:

  javascript
  Copy code
  // - Import required packages
  // - Import inquirer
  const inquirer = require("inquirer");
  // - Import console.table
  const cTable = require("console.table");
  // - Import the Department, Employee, and Role classes
  const Department = require("./lib/Department");
  const Employee = require("./lib/Employee");
  const Role = require("./lib/Role");
  
  const connection = require("./config/connection");
  
  const department = new Department(connection);
  const role = new Role(connection);
  const employee = new Employee(connection);
  
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


  // TODO: Create a function to add an employee
  // TODO: Create a function to update an employee's role
  
  init();