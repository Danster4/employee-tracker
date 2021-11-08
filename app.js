const inquirer = require('inquirer');
const roleRoutes = require('./routes/apiRoutes/roleRoutes')
const cTable = require('console.table');
const db = require('./db/connection');



const startMenuQuestion = [
  {
    type: 'list',
    name: 'startMenuQuestion',
    message: 'What would you like to do?',
    choices: [
      "Show all Roles",
      "Show all Departments",
      "Show all Employees"
    ]
  }
]


const startMenu = async() => {
  const result = await inquirer.prompt(startMenuQuestion)
  .then(function(result) {
    switch (result.startMenuQuestion) {
      case "Show all Roles":
        db.query('SELECT role.*, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id', function (err, results) {
          console.log(results);
        });
        startMenu();
        break;

      case "Show all Departments":
        db.query('SELECT * FROM department', function (err, results) {
          console.log(results);
        });
        startMenu();
        break;

      case "Show all Employees":
        db.query('SELECT * FROM employee', function (err, results) {
          console.log(results);
        });
        startMenu();
        break;
    }
  });
}

const startApp = async() => {
  console.log('Welcome to the Employee Tracker!');
  console.log('Please choose an option below to get started:');

  startMenu();
}

  


startApp();