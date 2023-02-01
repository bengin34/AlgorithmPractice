// Covfefe
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

function covfefe(str){
    if(str.includes('coverage')){
        var newStr = str.replace(/coverage/gi, 'covfefe')
    }
    else{
        var newStr = str.concat(' covfefe')
    }
    return newStr
}


//todo I like this 

function covfefe(str){
    return str.indexOf('coverage') > -1 ? str.replace(/coverage/g,'covfefe') : `${str} covfefe`;
  }