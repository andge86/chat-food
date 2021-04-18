# How to run the Cypress (including typescript and eslint) testing framework:

This guide assumes you have node with npm and git installed:

1. https://nodejs.org/en/download/
2. https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Open Termimal and run the commands:

1. Clone my repository: **git clone https://github.com/andge86/chat-food.git**
2. Go to project folder: **cd chat-food**
3. Install dependencied: **npm install**
4. Try generic command to run all tests in Chrome browser and open cucumber report in the end: **npm run cypress:run:headed:report**
5. Or execute the command from the Basic Cypress Commands list below

#### Basic Cypress Commands

**npx cypress open** -> will open Cypress desktop runner app <br />
**npx cypress run** -> headless run in Electron browser <br />
**npx cypress run --browser chrome** -> will run tests in Chrome browser <br />

Note: you can use other commands predefined in Cypress official documentation: https://docs.cypress.io/guides/guides/command-line.html#cypress-run

## Reporting

**npm run cypress:run:headed:report** - run the command, it will generate mochwesome report TestReport/cypress-tests-report.html <br />
Latest Report is at HitHub Pages: https://andge86.github.io/chat-food/

## Code Quality

**npm run eslint:fix** -> eslint to indicate/fix code quality issues

## Docker Commands

1. Run docker using official guldes: https://www.docker.com/
2. Go to project folder: **cd chat_food**
3. Install dependencied (if not installed): **npm install**

#### Commands:

**docker build -t chat-food_chrome .** -> will create docker image for chrome <br />
**docker build -t chat-food_electron .** -> will create docker image for electron <br />
**docker run --shm-size 512M chat-food_chrome --browser chrome** -> will run chat-food_chrome image inside docker container in Chrome browser <br />
**docker run --shm-size 512M chat-food_electron --headless** -> will run chat-food_electron image inside docker container in Electron browser headless mode <br />
**docker-compose up** -> will run chat-food_chrome and chat-food_electron images (predefined setup, please check docker-compose.yml file) <br />

You can use other docker commands like **docker ps, docker images, docker exec, docker attach**, etc.

Note: you can check package.json file scripts section for more predefined scripts and short commands to run (example: **npm run cypress:run:headless** -> will run tests in headless mode)

