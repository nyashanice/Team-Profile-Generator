const generateHTML = (team) => {
  //will be an array of classes
  htmlStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<main>`;

  htmlEnd = `</main></body></html>`;
  htmlBody = generateEmployeeCards(team);
  return htmlStart + htmlBody + htmlEnd;
};

const generateEmployeeCards = (team) => {
  console.log("Making the body");
  console.log(team);

  // itNeedsTheTeam
  // THE INDEX 0 OF OUR ARRAY IS THE MANAGER RIGHT
  // CREATE THE MANAGER CARD WITH INDEX 0 AND THEN REMOVE IT FROM THE ARRAY
  // we know for certain index 0 is the manager card
  // We meed to make an EngineerCard and an InternCard
  // for our html file we also need the
  let htmlString = "";

  //iterated through the team, build your htmlString
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

const createManagerCard = (employee) => {
  return `<div>
<div>
<h1>${employee.getName()}</h1>
<h2>${employee.getRole()}</h2>
</div>

<div>
<p>ID: ${employee.getId()}</p>
<a href="mailto:${employee.getEmail()}>Email: ${employee.getEmail()}</a>
<p>Office number: ${employee.getOfficeNumber()}</p>
</div>
</div>`;
};

const createInternCard = (employee) => {
  return `<div>
<div>
<h1>${employee.getName()}</h1>
<h2>${employee.getRole()}</h2>
</div>

<div>
<p>ID: ${employee.getId()}</p>
<a href="mailto:${employee.getEmail()}>Email: ${employee.getEmail()}</a>
<p>School: ${employee.getSchool()}</p>
</div>
</div>`;
};

const createEngineerCard = (employee) => {
  return `<div>
<div>
<h1>${employee.getName()}</h1>
<h2>${employee.getRole()}</h2>
</div>

<div>
<p>ID: ${employee.getId()}</p>
<a href="mailto:${employee.getEmail()}>Email: ${employee.getEmail()}</a>
<a href="github.com/${employee.getGithub()}>GitHub: ${employee.getGithub()}</a>
</div>
</div>`;
};

module.exports = generateHTML;
