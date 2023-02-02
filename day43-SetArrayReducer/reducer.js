// Set Reducer
// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4 

function setReducer(input) {
    // code here
    if(input.length === 1) return input[0]
    let newInput = []
    for(let i = 0,count = 1; i < input.length; i++){
      if(input[i] === input[i+1]){
        count +=1
      }else{
        newInput.push(count)
        count = 1
      }
    }
    
    console.log(newInput)
    return setReducer(newInput)
  }

  
  /*
  [0, 4, 6, 8, 8, 8, 5, 5, 7]
  1 1 1 3 2 1
  3 1 1 1
  3 3
  2
  */