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

// TODO: Create the function to initialize the application

// TODO: Create functions for each action
// - View all departments, roles, and employees.
// - Add a department, role, and employee.
// - Update an employee's role.

// TODO: Call the initialize function to start the application
