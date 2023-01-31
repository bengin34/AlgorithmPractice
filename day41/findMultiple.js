// 8 kyu
// Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


// (5, 25), [5, 10, 15, 20, 25])
// (1, 2), [1, 2])
// (5, 7), [5])
// (4, 27), [4, 8, 12, 16, 20, 24])
// (11, 54), [11, 22, 33, 44])




let a = (5,25)
let b = (1,2)
let c = (5, 7)
let d = (4,27)
let e = (11,54)



function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }


  // function findMultiples(int,limit){
  //   return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
  // }