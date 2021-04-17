// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import MainPage from "../../integration/page_objects/MainPage";

const goFromMainMenuTo = (mainMenuText: string, subMenuText: string) => {

    let endMainLink;
    switch (mainMenuText) {
        case "Movies":
            endMainLink = "/movie"
            break;
        case "TV Shows":
            endMainLink = "/tv"
            break;
        // add here more cases when required
        default:
            endMainLink = "#"
    }
    cy.get(`[data-role = "menu"] > li > [href = "${endMainLink}"]`).click();

    let endSubLink;
    switch (subMenuText) {
        case "Top Rated":
            endSubLink = "/top-rated"
            break;
        case "Popular":
            endSubLink = ""
            break;
        // add here more cases when required
        default:
            endSubLink = ""
    }
    cy.get(`[href = "${endMainLink}${endSubLink}"`).click();
}

Cypress.Commands.add('goFromMainMenuTo', goFromMainMenuTo);
