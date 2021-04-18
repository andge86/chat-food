declare namespace Cypress {
    interface Chainable {
        /**
         *  choose the options from Main Menu
         *  @param mainMenuText the name of Main Menu option
         *  @param subMenuText the name of Sub Menu option
         *  @example cy.goFromMainMenuTo("Movies", "Top Rated")
         */
        goFromMainMenuTo(mainMenuText: "Movies" | "TV Shows", subMenuText: "Top Rated" | "Popular") : void

        /**
         *  verifies if WebElement's text length > 0
         *  @param CSSSelctor CSSSelector of WebElement with text
         *  @example cy.verifyIfTextIsPresent('[class = "season card"] h4')
         */
        verifyIfTextIsPresent(CSSSelctor: string) : void
    }
}
