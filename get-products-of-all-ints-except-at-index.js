// arr = [1, 7, 3, 4];
//ALWAYS CONSIDER EDGE CASES!
// arr = [0, 0, 0, 0]
// arr = [1, 7, 3, 4, 0]
// arr = [1, 2, 6, 5, 9];
arr = [3, 1, 2, 5, 6, 4];
// The trick with this problem was to realize that the products before the index can be calculated and stored, and the products after the index as well. 
// Needed to offset the index by 1 because there's no integers before the index we're looking at.
getProductsOfAllIntsExceptAtIndex = (arr) => {
  // let arrDupe = arr.slice(0);
  // let arrTemp = [];
  
  let product = 1;
  let product2 = 1;
  let answer = [];
  
  if(arr < 2) {
    throw new Error('Getting a product requires at least two numbers')
  }
  
  for(var i = 0; i < arr.length; i++) {
    answer.push(product)
    product *= arr[i];
  }
  
  
  //Need to remember whether to include = in for loops
  for(var j = arr.length - 1; j >= 0; j--) {
    answer[j] *= product2
    product2 *= arr[j]
  }

  return answer
}


getProductsOfAllIntsExceptAtIndex(arr)








// // arr = [1, 7, 3, 4];
// //ALWAYS CONSIDER EDGE CASES!
// // arr = [0, 0, 0, 0]
// // arr = [1, 7, 3, 4, 0]
// // arr = [1, 2, 6, 5, 9];
// arr = [3, 1, 2, 5, 6, 4];
// getProductsOfAllIntsExceptAtIndex = (arr) => {
//   // let arrDupe = arr.slice(0);
//   // let arrTemp = [];
  
//   let product = 1;
//   let answer = [];
  
//   if(arr < 2) {
//     throw new Error('Getting a product requires at least two numbers')
//   }
  
  
//   for(var i = 0; i < arr.length; i++) {
//     product *= arr[i];
//     console.log(product)
//   }
  
//   for(var j = 0; j < arr.length; j++) {
//     answer.push(product/arr[j])
//   }
  
//   return answer
// }


// getProductsOfAllIntsExceptAtIndex(arr)










// // arr = [1, 7, 3, 4];
// //ALWAYS CONSIDER EDGE CASES!
// // arr = [0, 0, 0, 0]
// // arr = [1, 7, 3, 4, 0]
// arr = [1, 2, 6, 5, 9];
// getProductsOfAllIntsExceptAtIndex = (arrDupe) => {
//   // let arrDupe = arr.slice(0);
//   // let arrTemp = [];
  
//   if(arrDupe < 2) {
//     throw new Error('Getting a product requires at least two numbers')
//   }
  
//   let arrTemp;
//   let answer = [];
  
//   for(var i = 0; i < arr.length; i++) {
    
//     arrTemp = arrDupe.shift()
//     console.log(arrDupe)
//     product = arrDupe.reduce((acc, ele) => {
//       return acc * ele
//     }, 1)
    
//     answer.push(product)
    
//     // console.log(arrDupe, arrTemp)
//     arrDupe.push(arrTemp)
    
//   }
//   return answer
// }


// getProductsOfAllIntsExceptAtIndex(arr)


