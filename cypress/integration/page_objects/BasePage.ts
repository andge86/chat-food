import MainPage from './MainPage';
import TopRatedMoviesPage from "./TopRatedMoviesPage";

class BasePage {

    openMainPage() {
        cy.visit('/');
        return new MainPage();
    }

    openTopRatedMoviesPage() {
        cy.visit('/movie/top-rated/');
        return new TopRatedMoviesPage();
    }

}

export default BasePage;
