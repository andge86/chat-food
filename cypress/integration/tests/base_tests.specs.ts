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
        moviePage.getSeasonImage()
            .should('be.visible')
            .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
        // Better to check if the text is coming properly from database for all the cases below:
        moviePage.getSeasonHeader().invoke('text').then((text) => {
            expect(text.toString().length).to.be.greaterThan(0);
        });
        moviePage.getSeasonYearAndEpisodes().invoke('text').then((text) => {
            expect(text.toString().length).to.be.greaterThan(0);
        });
        moviePage.getSeasonDescription().invoke('text').then((text) => {
            expect(text.toString().length).to.be.greaterThan(0);
        });
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
