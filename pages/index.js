'use string';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFIlmQuestion = prompt('Один из последних просмотренных фильмов?', '');
            const filmRankQuestion = prompt('На сколько оцените его?', '');
        
            if (lastFIlmQuestion != null && filmRankQuestion != null && lastFIlmQuestion != '' && filmRankQuestion != '' && lastFIlmQuestion.length < 50) {
                personalMovieDB.movies[lastFIlmQuestion] = filmRankQuestion;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель')
        } else {
            console.log('Вы киноман');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if (favoriteGenres != null || favoriteGenres != '') {
                personalMovieDB.genres[i - 1] = favoriteGenres;
            } else {
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat === false;
        } else {
            personalMovieDB.privat === true;
        }
    }
};
