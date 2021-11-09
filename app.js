const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');



const startMenuQuestion = [
  {
    type: 'list',
    name: 'startMenuQuestion',
    message: 'What would you like to do?',
    choices: [
      "Show all Roles",
      "Add a Role",
      "Show all Departments",
      "Add a Department",
      "Show all Employees",
      "Add an Employee",
      "Update an Employee's role"
    ]
  }
]

const addRoleQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the new role?'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the new role?'
  },
  {
    type: 'input',
    name: 'department',
    message: 'What department is the new role in? Please type the number only of the department shown above!'
  }
]

const addDepartmentQuestion = [
  {
    type: 'input',
    name: 'name',
    message: 'What department would you like to add?'
  }
]


const addEmployeeQuestions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What is the first name of the new employee?'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of the new employee?'
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'What role is the new employee in? Please type the number only of the "id" section shown above!',
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'Who is the manager for the new employee? Please type the number only of the "id" section shown above!'
  }
]

const chooseEmployeeQuestion = [
  {
    type: 'input',
    name: 'employee_id',
    message: 'Which employee would you like to update? Please only type the number of the "id" of the employee!'
  },
]

const updateEmployeeRoleQuestion = [
  {
    type: 'input',
    name: 'role_id',
    message: 'What new role would you like for your employee? Please only type the number of the "id" of the role!'
  },
]


const addRole = async() => {
  const result = await inquirer.prompt(addRoleQuestions)
  const sql = `INSERT INTO role (title, salary, department_id)
  VALUES (?,?,?)`;
  const params = [result.title, result.salary, result.department];

  db.query(sql, params, function (err, results) {
    console.log("");
    console.table(results);
  });
  startMenu();
}

const addDepartment = async() => {
  const result = await inquirer.prompt(addDepartmentQuestion)
  const sql = `INSERT INTO department (name)
  VALUES (?)`;
  const params = [result.name];

  db.query(sql, params, function (err, results) {
    console.log("");
    console.table(results);
  });
  startMenu();
}

const addEmployee = async() => {
  const result = await inquirer.prompt(addEmployeeQuestions)
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES (?,?,?,?)`;
  const params = [result.first_name, result.last_name, result.role_id, result.manager_id];

  db.query(sql, params, function (err, results) {
    console.log("");
    console.table(results);
  });
  startMenu();
}

const chooseEmployee = async() => {
  const result = await inquirer.prompt(chooseEmployeeQuestion);

  db.query('SELECT role.*, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id', function (err, results) {
          console.log("");
          console.table(results);
        });
  
  updateEmployeeRole(result.employee_id);
}

const updateEmployeeRole = async(employeeID) => {
  const result = await inquirer.prompt(updateEmployeeRoleQuestion)
  const sql = `UPDATE employee SET role_id = ${result.role_id}
  WHERE id = ${employeeID}`;

  db.query(sql, function (err, results) {
    console.log("");
    console.table(results);
  });
  startMenu();
}

const startMenu = async() => {
  const result = await inquirer.prompt(startMenuQuestion)
  .then(function(result) {
    switch (result.startMenuQuestion) {
      case "Show all Roles":
        db.query('SELECT role.*, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id', function (err, results) {
          console.log("");
          console.table(results);
        });
        startMenu();
        break;
      
      case "Add a Role":
        db.query('SELECT * FROM department', function (err, results) {
          console.log("");
          console.table(results);
        });
        addRole();
        break;

      case "Show all Departments":
        db.query('SELECT * FROM department', function (err, results) {
          console.log("");
          console.table(results);
        });
        startMenu();
        break;

      case "Add a Department":
        addDepartment();
        break;

      case "Show all Employees":
        db.query('SELECT employee.*, role.title AS role_title FROM employee LEFT JOIN role ON employee.role_id = role.id', function (err, results) {
          console.log("");
          console.table(results);
        });
        startMenu();
        break;

      case "Add an Employee":
        db.query('SELECT role.*, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id', function (err, results) {
          console.log("");
          console.table(results);
        });
        db.query('SELECT employee.*, role.title AS role_title FROM employee LEFT JOIN role ON employee.role_id = role.id', function (err, results) {
          console.log("");
          console.table(results);
        });
        addEmployee();
        break;

      case "Update an Employee's role":
        db.query('SELECT employee.*, role.title AS role_title FROM employee LEFT JOIN role ON employee.role_id = role.id', function (err, results) {
          console.log("");
          console.table(results);
        });
        chooseEmployee();
        break;
    }
  });
}

// employee.last_name AS manager_name FROM employee LEFT JOIN employee ON employee.manager_id = employee.id
// employee.last_name AS manager_last_name FROM employee LEFT JOIN employee ON employee.manager_id = employee.id

const startApp = async() => {
  console.log('Welcome to the Employee Tracker!');
  console.log('Please choose an option below to get started:');

  startMenu();
}

  


startApp();