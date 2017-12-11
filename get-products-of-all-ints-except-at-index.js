arr = [1, 7, 3, 4];
//ALWAYS CONSIDER EDGE CASES!
arr = [0, 0, 0, 0]
arr = [1, 7, 3, 4, 0]
arr = [1, 2, 6, 5, 9];
getProductsOfAllIntsExceptAtIndex = (arrDupe) => {
  // let arrDupe = arr.slice(0);
  // let arrTemp = [];
  
  if(arrDupe < 2) {
    throw new Error('Getting a product requires at least two numbers')
  }
  
  let arrTemp;
  let answer = [];
  
  for(var i = 0; i < arr.length; i++) {
    
    arrTemp = arrDupe.shift()
    console.log(arrDupe)
    product = arrDupe.reduce((acc, ele) => {
      return acc * ele
    }, 1)
    
    answer.push(product)
    
    // console.log(arrDupe, arrTemp)
    arrDupe.push(arrTemp)
    
  }
  return answer
}


getProductsOfAllIntsExceptAtIndex(arr)


