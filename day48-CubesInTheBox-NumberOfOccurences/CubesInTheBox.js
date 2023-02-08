// Cubes in the box
// Your job is to write a function f(x,y,z) to count how many cubes of any size can fit inside a x*y*z box. For example, a 2*2*3 box has 12 1*1*1 cubes, 2 2*2*2 cubes, so a total of 14 cubes in the end.

// Notes:
// x,y,z are strictly positive and will not be too big.



function f(x,y,z){
    let count = 0;
    for(let i = 1; i <= Math.min(x,y,z); i++){
      let a = x - i + 1;
      let b = y - i + 1;
      let c = z - i + 1;
      count += (a * b * c)
    }
    return count;
  }