# Team-Profile-Generator

## Description

The Team Profile Generator allows users to build a team in the command line that will generate an HTML file with a card for each team member upon completion. The purpose for this application is to keep track of team members and be able to quickly access their emails and GitHub profiles. The HTML file provides clickable links to these features so it makes it easy for team members to contact each other and remember important details.

While building this application, I learned how to use classes and implement test driven development while also strenghtening my skills with the Inquirer package and async await functions.

## Installation

Before using the application, you must ensure that you have the Inquirer and Jest packages installed. To install the Inquirer package, you can type `npm i inquirer@8.2.4.` into the command line. To install the Jest package, you can type `npm install --save-dev jest` into the command line.

## Usage

To begin using the application, you type `node index.js` into the command line. You will automatically be prompted to enter the team manager information. Once complete, you will be taken to the main menu which gives you the option to add an engineer, add an intern, or finish building your team. If you choose to add an intern or engineer, you will be taken back to the main menu once completed. Once you're done adding team members and choose the 'finish building your team' option, the index.html file will be populated with the information you input. To view your team members' cards, right click on the index.html file in the dist folder. Click on 'open with live server' or 'open in default browser' to see your team members' cards.

If you click on the email address of any team member, you will be directed to your default email application and their email will be auto populated in the 'TO' field. If you click on the GitHub username of any engineer, you will be redirected to their GitHub profile.

To run the tests, type `npm run test` into the command line. All tests can be found in the tests folder.

[Watch demo video here!](video/Team%20Profile%20Generator.mp4)
