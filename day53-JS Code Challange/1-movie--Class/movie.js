//! Create a Class which includes movie info 



// function Movie(title, director, genre, releaseYear, rating) {
//     this.title = title;
//     this.director = director;
//     this.releaseYear = releaseYear
//     this.genre = genre;
//     this.rating = rating
// }

// Movie.prototype.getOverwiev = function () {
//     return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
// }
class Movie {
    constructor ( title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear
        this.genre = genre;
        this.rating = rating
    }

    getOverwiev(){
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
    }
}

// const Spiderman = new Movie("Spiderman", "Sam Raimi", "action", 2002, 87)

// console.log(Spiderman);
// console.log(Spiderman.getOverwiev());
