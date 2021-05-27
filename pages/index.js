'use string';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFIlmQuestion = prompt('Один из последних просмотренных фильмов?', '');
        const filmRankQuestion = prompt('На сколько оцените его?', '');
    
        if (lastFIlmQuestion != null && filmRankQuestion != null && lastFIlmQuestion != '' && filmRankQuestion != '' && lastFIlmQuestion.length < 50) {
            personalMovieDB.movies[lastFIlmQuestion] = filmRankQuestion;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель')
    } else {
        console.log('Вы киноман');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = favoriteGenre;
    }
}

writeYourGenres();
