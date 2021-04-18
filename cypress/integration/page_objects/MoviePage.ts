class MoviePage {

    VIDEOS_SECTION = '#videos';
    ALL_VIDEOS_LIST = '[class = "video card no_border"]';

    SEASON_CARD = '[class = "season card"]';
    SEASON_POSTER_IMAGE = this.SEASON_CARD + ' .poster > img';
    SEASON_HEADER = this.SEASON_CARD + ' h2 > a';
    SEASON_YEAR_AND_EPISODES = this.SEASON_CARD + ' h4';
    SEASON_DESCRIPTION = this.SEASON_CARD + ' .season_overview > p';

    DISCUSSIONS = '#discussions';
    DISCUSSIONS_AMOUNT = this.DISCUSSIONS + ' span'
    SHOWN_DISCUSSIONS_TEXT_LIST = '.review .open .topic'

    clickOnVideos() {
        cy.get(this.VIDEOS_SECTION).click().wait(1000);
        return this;
    }

    clickOnDiscussions() {
        cy.get(this.DISCUSSIONS).click().wait(1000);
        return this;
    }

    getVideosHeaderElement() {
       return cy.get(this.VIDEOS_SECTION);
    }

    getAllVideosElements() {
        return cy.get(this.ALL_VIDEOS_LIST);
    }

    getSeasonImage() {
        return cy.get(this.SEASON_POSTER_IMAGE).scrollIntoView().wait(1000);
    }

    getSeasonHeader() {
        return cy.get(this.SEASON_HEADER);
    }

    getSeasonYearAndEpisodes() {
        return cy.get(this.SEASON_YEAR_AND_EPISODES);
    }

    getSeasonDescription() {
        return cy.get(this.SEASON_DESCRIPTION);
    }

    getDiscussionsAmount() {
        return cy.get(this.DISCUSSIONS_AMOUNT);
    }

    getDiscussionsShownText() {
        return cy.get(this.SHOWN_DISCUSSIONS_TEXT_LIST);
    }

}

export default MoviePage;
