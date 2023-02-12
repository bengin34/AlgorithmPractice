// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

// solve(""),[0,0,0,0];
// solve("aAbBcC"),[3,3,0,0];
// (solve("Codewars@codewars123.com"),[1,18,3,2]);
// (solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
// (solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
// (solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
// (solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
// (solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);


let s = "RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"

function solve(x) {
    let upperCase = x.match(/[A-Z]/g)||[]
    let lowerCase = x.match(/[a-z]/g)||[]
    let numbers = x.match(/[0-9]/g)||[]
    let special = x.match(/[^A-Z0-9]/gi)||[]

    return [upperCase.length, lowerCase.length, numbers.length, special.length]

}
