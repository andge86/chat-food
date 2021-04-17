import TopRatedMoviesPage from "./TopRatedMoviesPage";
import MoviePage from "./MoviePage";

class MainPage {

    ALL_POPULAR_MOVIES_LIST = '[class = "card style_1"]';

    clickOnPopularMovieNumber(number) {
        cy.get(this.ALL_POPULAR_MOVIES_LIST).eq(number - 1).click().wait(2000);
        return new MoviePage();
    }

}


export default MainPage;
