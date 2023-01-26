// DESCRIPTION:
// Implement zipWith
// zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

// Examples

// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions

// zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1]), [6,6,6,6,6,6];
// zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]), [6,6,6,6,6  ];
// zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2  ]), [6,6,6,6,6  ];

//????? here is my solution ıt passed static tests but ıt failed sanity tests?? ı dont understand!!
let fn = function(a,b) { return a+b};
let a1 = [+0,+0];
let a0 = [+0,+0,+0  ];
function zipWith(fn,a0,a1) {
let c = [];
if(a1.length < a0.length ){
    n = a1.length
    a0.pop()
}else if(a1.length > a0.length){
    n = a0.length
    a1.pop()
}else{
    n = a0.length
}
for(let i=0; i < n; i++ ){

    c.push((fn(a0[i],a1[i])))
}
    return c;
  }
  

//todo HERE is best practice

function zipWith(fn,a0,a1){
    let result = [];
    //get the min length
    let min = Math.min(a0.length,a1.length);

    for( let i = 0; i < min ; i++){
        result.push(fn(a0[i],a1[i]));
    } 
    return result;
}
console.log(zipWith(fn,a0,a1));