FROM cypress/included:7.1.0

RUN mkdir /app
WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json
COPY ./package.json ./tsconfig.json

RUN npm install
CMD npx cypress run
