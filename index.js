const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./src/generateHTML.js");
const Intern = require("./lib/Intern");
const teamArray = [];

// starting function that creates team manager
const init = async () => {
  const managerData = await inquirer.prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the manager's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the manager's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNum",
    },
  ]);
  // adds manager information to team array as an object
  teamArray.push(
    new Engineer(
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.officeNum
    )
  );
  main();
};

init();

// prompts user to add to team or complete team
const main = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["Add an Intern", "Add an Engineer", "Finish Building Team"],
      name: "action",
    },
  ]);
  // console.log(answer);
  switch (answer.action) {
    case "Add an Intern":
      addIntern();
      break;
    case "Add an Engineer":
      addEngineer();
      break;
    default:
      buildTeamFile();
  }
};

// user input for intern info
const addIntern = async () => {
  const internData = await inquirer.prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the intern's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What school does the intern attend?",
      name: "school",
    },
  ]);
  // adds data to team array
  teamArray.push(
    new Intern(
      internData.name,
      internData.id,
      internData.email,
      internData.school
    )
  );
  main();
};

// user input for engineer info
const addEngineer = async () => {
  const engineerData = await inquirer.prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineer's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "github",
    },
  ]);
  // adds data to team array
  teamArray.push(
    new Engineer(
      engineerData.name,
      engineerData.id,
      engineerData.email,
      engineerData.github
    )
  );
  main();
};

// generates HTML file
const buildTeamFile = () => {
  try {
    fs.writeFileSync("dist/index.html", generateHTML(teamArray));
  } catch (error) {
    console.log(error);
  }
};

// try {
//   fs.writeFileSync(
//     "dist/index.html",
//     generateHTML([
//       new Manager("Nya", 1, "nya@email.com", 35),
//       new Engineer("Alex", 5, "alex@email.com", "nyatyus"),
//       new Intern("Mike", 12, "mike@email.com", "Texas"),
//     ])
//   );
// } catch (error) {
//   console.log(error);
// }
