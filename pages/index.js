'use string';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFIlmQuestion = prompt('Один из последних просмотренных фильмов?', '');
const filmRankQuestion = prompt('На сколько оцените его?', '');

const lastFIlmQuestion2 = prompt('Один из последних просмотренных фильмов?', '');
const filmRankQuestion2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFIlmQuestion] = filmRankQuestion;
personalMovieDB.movies[lastFIlmQuestion2] = filmRankQuestion2;

console.log(personalMovieDB);