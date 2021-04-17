import MoviePage from "./MoviePage";

class TopRatedMoviesPage {

    ALL_FILTERS = '[class = "filter_panel card"] ,[class = "filter_panel card closed"]';
    SORT_BY_LIST = '#sort_by_listbox';
    FILTER_BY_GENRES_LIST = "#with_genres";
    MOVIES_LIST_ON_PAGE_1 = "#page_1 > div";

    clickOnSortResultsByDropdown() {
        cy.get(this.ALL_FILTERS).eq(0).find("[role = 'listbox']").click();
        return new TopRatedMoviesPage();
    }

    chooseSortingOption(option : 'Release Date Ascending' | 'Release Date Descending') {
        cy.get(this.SORT_BY_LIST).contains(option).click({force: true});
        return this;
    }

    expandFilteringOptions() {
        cy.get(this.ALL_FILTERS).eq(1).click();
        return this;
    }


    chooseFilteringByGenreOption(genre : 'Documentary' | 'Action' | 'Drama'){
        cy.get(this.FILTER_BY_GENRES_LIST).contains(genre).click();
        return this;
    }

    clickOnSearchButton() {
        // There is a bug (BUG_123): Search button is displayed twice after choosing any sorting option
        cy.get('.load_more > a').contains("Search").first().click().wait(1000);
        return new TopRatedMoviesPage();
    }


    clickOnMovieNumber(number : number) {
        cy.get(this.MOVIES_LIST_ON_PAGE_1).eq(number-1).click();
        return new MoviePage();
    }

}

export default TopRatedMoviesPage;
