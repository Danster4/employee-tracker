const inquirer = require('inquirer');
const cTable = require('console.table');




const startMenuQuestion = [
  {
    type: 'list',
    name: 'startMenuQuestion',
    message: 'What would you like to do?',
    choices: [
      "Show all Roles",
      "Yes, please add an Intern to my team",
      "No, there are no more team members to add"
    ]
  }

]


const startApp = async() => {
  console.log('Welcome to the Employee Tracker!');
  console.log('Please choose an option below to get started:');

  const result = await inquirer.prompt(startMenuQuestion)
  .then(function(result) {
    switch (result.startMenuQuestion) {
      case "Show all Roles":
        showAllRoles();
        break;

      case "Yes, please add an Intern to my team":
        // insert function;
        break;

      case "No, there are no more team members to add":
        // insert function;
        break;
    }
  })
}

startApp();