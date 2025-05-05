//my privous code was below 

//function sum(a, b) {
//     return a + b;
//   }
  
//   module.exports = {methodSum:sum};



  function sum(a, b) {
    // Convert inputs to numbers
    const numA = Number(a);
    const numB = Number(b);
    
    // Check if either conversion resulted in NaN
    if (isNaN(numA) || isNaN(numB)) {
        return NaN;
    }
    
    return numA + numB;
}

module.exports = { methodSum: sum };