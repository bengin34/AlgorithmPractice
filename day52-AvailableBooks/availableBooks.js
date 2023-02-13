//An inventory application for a bookstore
//each book have
// 1.title
// 2.author
// 3.ısbn
// 4.numCopies

// output: out of stock if 0
// low stock < 10
// otherwise in stock



//!!! Create these functions
// getAvailability()
// sell(numSold)
// restock(numCopies)





// function Book (title, author, ISBN, numCopies){
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//     if(this.numCopies=== 0) {
//         return "Out Of Stock"
//     } else if(this.numCopies < 10){
//         return "Low Stock"
//     } 
//     return "in stock"
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
// this.numCopies -= numCopiesSold
// }

// Book.prototype.restock = function(numCopiesStocked = 5){
//     this.numCopies += numCopiesStocked;
// }


class Book {
    constructor(title,author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }



get availability() {
    return this.getAvailability();
}

getAvailability() {
    if(this.numCopies=== 0) {
     return "Out Of Stock"
    } else if(this.numCopies < 10){
      return "Low Stock"
    } 
    return "in stock"
}

sell(numCopiesSold= 1){
    this.numCopies -= numCopiesSold;
}

restock ( numCopiesRestocked = 5){
    this.numCopies += numCopiesRestocked
}

}