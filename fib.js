// function fibs(n) {
//     let fibArray = [];
//     let numA = 0;
//     let numB = 1;
//     let numC = numA + numB;

//     for (let i = 0; i < n - 3; i++) {
//         if (numA === 0) {
//             fibArray.push(numA);
//             fibArray.push(numB);
//             fibArray.push(numC);
//         }
        
//         numA = numB;
//         numB = numC;
//         numC = numA + numB;
//         fibArray.push(numC);
//     }

//     return fibArray;
// }

// fibs recursive

function fibonacci(n, seq = [1, 1]) {
    if (n <= 2) {
      return seq.slice(0, n);
    }
    
    if (seq.length >= n) {
      return seq;
    }
  
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return fibonacci(n, seq);
  }