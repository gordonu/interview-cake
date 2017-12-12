// arr = [3, -1, -2, -5, -6, -4];
// var arr = [1, 10, -5, 1, -100];
var arr = [-1, 3, 5, 1]

//The answer could be a product of the two negative numbers and one positive
//or it could be of 3 positive numbers.

//Keep track and updating
//highestProductOf3
//highestProductOf2
//highest
//lowestProductOf2
//lowest

productOfThree3 = (arr) => {
  
  let highestProductOf3 = arr[0] * arr[1] * arr[2]
  
  let highestProductOf2 = arr[0] * arr[1]
  let lowestProductOf2 = arr[0] * arr[1]
  
  let highest = Math.max(arr[0], arr[1])
  let lowest = Math.min(arr[0], arr[1])
  
  for(var i = 2; i < arr.length; i++) {
    
    highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * arr[i], lowestProductOf2 * arr[i])
    
    highestProductOf2 = Math.max(highestProductOf2, highest * arr[i], lowest * arr[i])
    lowestProductOf2 = Math.min(lowestProductOf2, highest * arr[i], lowest * arr[i])
    
    highest = Math.max(highest, arr[i])
    lowest = Math.min(lowest, arr[i])
    
  }
  console.log(lowest, highest)  
  return highestProductOf3
}


productOfThree3(arr)