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
  
  // TODO: Create a function to view all departments
  // TODO: Create a function to view all roles
  // TODO: Create a function to view all employees
  // TODO: Create a function to add a department
  // TODO: Create a function to add a role
  // TODO: Create a function to add an employee
  // TODO: Create a function to update an employee's role
  
  init();