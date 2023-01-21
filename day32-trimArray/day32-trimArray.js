// !  DESCRIPTION:
// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

//! "Creating kata is fun", 14 
//! should return "Creating ka..."

//! ("He",1)  H...

//*** Here is my first solution but it doesnt work when the size is smaller than 3 */

let str = "Creating kata is fun"
let size = 3
function trimArr(str,size){
    let b = ["..."]
   return str.split("").splice(0,size-3,).concat(b).join("")
}

//**** here is the best practice */

const trim = (str, size) => str.length <= size ? str : str.slice(0, size - (size <= 3 ? 0 : 3)) + '...';
