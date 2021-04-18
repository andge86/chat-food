import BasePage from "../page_objects/BasePage";
import MoviePage from "../page_objects/MoviePage";
import TopRatedMoviesPage from "../page_objects/TopRatedMoviesPage";
describe('Base Tests', () => {
    it('Check videos amount', () => {
        new BasePage()
            .openMainPage();

        // example of typescript usage
        cy.goFromMainMenuTo('Movies', 'Top Rated');

        new TopRatedMoviesPage()
            .clickOnSortResultsByDropdown()
            .clickOnSortResultsByDropdown()
            .chooseSortingOption("Release Date Ascending")
            .expandFilteringOptions()
            .chooseFilteringByGenreOption('Documentary')
            .clickOnSearchButton()
            .clickOnMovieNumber(1)
            .clickOnVideos();

        const moviePage = new MoviePage();
        moviePage.getVideosHeaderElement().invoke('text')
            .then((videosHeaderText) => {
            moviePage.getAllVideosElements()
                .should('have.length', videosHeaderText.toString().replace('Videos ', ''));
        });
    });


    it('Check if popular movie info is loaded', () => {
        const moviePage = new BasePage()
            .openMainPage()
            .clickOnPopularMovieNumber(2);

        // checking if poster image is loaded
        moviePage.getSeasonImage()
            .should('be.visible')
            .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });

        // checking if season header, year, episode and description text is loaded
        // better to use database and verify if the proper text is loaded
        cy.verifyIfTextIsPresent(moviePage.SEASON_HEADER);
        cy.verifyIfTextIsPresent(moviePage.SEASON_YEAR_AND_EPISODES);
        cy.verifyIfTextIsPresent(moviePage.SEASON_DESCRIPTION);

        // checking if first comment's header text text is loaded
        // better to use database and verify if the proper text is loaded
        moviePage.clickOnDiscussions().getDiscussionsAmount().invoke('text')
            .then(parseFloat)
            .then((amount) => {
            if (amount > 0) {
                moviePage.getDiscussionsShownText().first().invoke('text').then((text) => {
                   expect(text.toString().length).to.be.greaterThan(0);
                });
            }
        });
    });
});
