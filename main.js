//Build a program that takes a value and returns a list of its multiples up to another 
// value(the limit). 
// If the limit is a multiple of the integer, it should be included as well

let findMultiples = (num, limit) => {
    // Declare a variable to hold the multiples of num
    let multiples = []
    // loop through the limit and bring out all multiples of the limit
    for(let i = num; i <= limit; i += num){
        multiples.push(i)
    }
    // return the declared variable
    return multiples
}
// call the function to display the multiples
alert(findMultiples(2,20))




// function findMultiples(integer, limit){
//     return Array(Math.floor(limit/integer)).fill(1).map((x,i) => integer*(i+1))
// }
// alert(findMultiples(2,20))   