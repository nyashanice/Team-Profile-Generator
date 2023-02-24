// HTML contents to be sent to html file
const generateHTML = (team) => {
  htmlStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>

<header>
  <p id="pageTitle">Members Only</p>
</header>
<body>
<main>`;
  htmlEnd = `
  </main>
  </body>
  </html>`;
  htmlBody = generateEmployeeCards(team);
  return htmlStart + htmlBody + htmlEnd;
};

// makes employee cards to send to html file
const generateEmployeeCards = (team) => {
  let htmlString = "";

  //iterates through team to create cards
  team.forEach((employee) => {
    if (employee.getRole() == "Manager") {
      htmlString += createManagerCard(employee);
    } else if (employee.getRole() == "Intern") {
      htmlString += createInternCard(employee);
    } else if (employee.getRole() == "Engineer") {
      htmlString += createEngineerCard(employee);
    }
  });

  return htmlString;
};

// cards for each role in the way they'll be populated in HTML
const createManagerCard = (employee) => {
  return `
<div class="card">
  <div class="cardHeader">
    <h1>${employee.getName()}</h1>
    <h2>${employee.getRole()}</h2>
  </div>

  <div class="cardBody">
    <p class="contents">ID: ${employee.getId()}</p>
    <a class="contents" href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a>
    <p class="contents">Office number: ${employee.getOfficeNumber()}</p>
  </div>
</div>`;
};

const createInternCard = (employee) => {
  return `
<div class="card">
  <div class="cardHeader">
    <h1>${employee.getName()}</h1>
    <h2>${employee.getRole()}</h2>
  </div>

  <div class="cardBody">
    <span><p class="contents">ID: ${employee.getId()}</p></span>
    <span><a class="contents" href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a></span>
    <span><p class="contents">School: ${employee.getSchool()}</p></span>
  </div>
</div>`;
};

const createEngineerCard = (employee) => {
  return `
<div class="card">
  <div class="cardHeader">
    <h1>${employee.getName()}</h1>
    <h2>${employee.getRole()}</h2>
  </div>

  <div class="cardBody">
    <p class="contents">ID: ${employee.getId()}</p>
    <p class="contents"><a href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a></p>
    <p class="contents"><a href="https://www.github.com/${employee.getGithub()}">GitHub: ${employee.getGithub()}</a></p>
  </div>
</div>`;
};

module.exports = generateHTML;
