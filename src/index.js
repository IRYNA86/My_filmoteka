import './css/style.css';
import fetchSearchMovies from './fetchSearchFilms';
import fetchFavoritesMovies from './renderFavoriteFilm';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import renderMain from './renderMain';
import pagination from './pagination';

// const refs = {
//   gallery: document.querySelector('.list_film'),
// };

// const container = document.querySelector('.tui-pagination');

// const pagination = new Pagination(container, {
//   totalItems: 0,
//   page: 1,
// });
// console.dir(pagination);
// const page = pagination.getCurrentPage();
// fetchFavoritesMovies(page).then(movies => {
//   totalItems: movies.total_results;
//   console.dir(movies.total_results);
//   pagination.reset(movies.total_results)
// });

// pagination.on('afterMove', event => {
//   fetchFavoritesMovies._page = event.page;
//   console.log(event.page);
//   fetchFavoritesMovies(event.page).then(movies => {
//     const ping = movies.results;
//     console.log(ping);
//     fetchFavoritesMovies(ping);
//   });
// });

// fetchFavoritesMovies(page).then(movies => {
//     const ping = movies.results;
//     console.log(ping);
//     renderMain(ping);
//   });

