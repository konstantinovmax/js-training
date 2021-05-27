'use string';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFIlmQuestion = prompt('Один из последних просмотренных фильмов?', '');
    const filmRankQuestion = prompt('На сколько оцените его?', '');

    if (lastFIlmQuestion != null && filmRankQuestion != null && lastFIlmQuestion != '' && filmRankQuestion != '' && lastFIlmQuestion.length < 50) {
        personalMovieDB.movies[lastFIlmQuestion] = filmRankQuestion;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель')
} else {
    console.log('Вы киноман');
}

console.log(personalMovieDB);