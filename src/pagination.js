// import './css/style.css';
// import fetchSearchMovies from './fetchSearchFilms';
// import fetchFavoritesMovies from './renderFavoriteFilm';
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import renderMain from './renderMain';
// import arrayGenres from './arreyGenges';

// import preloader from './preloader';

// const refs = {
//   gallery: document.querySelector('.list_film'),
// };

// const container = document.querySelector('.tui-pagination');
  
// let pagination = new Pagination(
//   container, {
//   totalItems: 0,
//     page: '1',
//   }
// );
// const page = pagination.getCurrentPage();


// fetchFavoritesMovies(page).then(movies => {
//   renderFavoritesMovies(movies)
//   pagination.reset(movies.total_results);
 
// })

// pagination.on('afterMove', eventFavoritePagination);
 
// function eventFavoritePagination(event) {
//     console.log(event.page);
//     fetchFavoritesMovies(event.page).then(movies => {
//       resetFavoritesMovies();
//       renderFavoritesMovies(movies);
//       // console.log(movies.results);
//     }

//     )
//   }

// function getGenres(arrayId) {
//   const arr = [];
//   for (const value of arrayGenres) {
//     if (arrayId.includes(value.id)) {
//       arr.push(value.name);
//     }
//   }
//   if (arrayId.length > 2) {
//     arr.splice(2, arr.length - 2, 'Other');
//   }

//   return arr.join(', ');
// }
// function renderGallery(movies) {
//   return movies
//     .map(({ id, poster_path, title, release_date, genre_ids }) => {
//       const releaseYear = release_date.split('-')[0];
//       return `
//       <li class='list_film_item' id=${id}>
//         <img class="list_film_image" style = "border-radius: 5px" src='https://image.tmdb.org/t/p/w500${poster_path}' alt='Обложка фильма' loading='lazy' />
//         <div class='info'>
//             <p class='info-title'>
//               <b>${title}</b>
//             </p>
//             <p class='info-date'>
//               <span>${getGenres(genre_ids)}</span>
//               <span>|</span>
//               <span>${releaseYear}</span>
//             </p>
//         </div>
//       </li>
//       `;
//     })
//     .join('');
// }
// function renderFavoritesMovies(movies) {
//   refs.gallery.insertAdjacentHTML('beforeend', renderGallery(movies.results));
  
// }

// function resetFavoritesMovies() {
//   refs.gallery.innerHTML = '';
// }