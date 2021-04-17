declare namespace Cypress {
    interface Chainable {
        /**
         *  choose the options from Main Menu
         *  @param mainMenuText the name of Main Menu option
         *  @param subMenuText the name of Sub Menu option
         *  @example cy.goFromMainMenuTo("Movies", "Top Rated")
         */
        goFromMainMenuTo(mainMenuText: "Movies" | "TV Shows", subMenuText: "Top Rated" | "Popular") : void
    }
}
