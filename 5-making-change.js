denominationsFunc = (amount, denominations) => {
  
  //the the smallest denomination
  //make the amount
  // convert small denominations from the first to bigger amounts.
  denominations.sort((a,b) => a - b)
 
  let stack = []; 
  let money = 0;
  let ctr = 0;
  
  //SMALLEST
 while(money < amount) {
  stack.push(denominations[0])
  money = stack.reduce((acc, ele) => { return acc + ele}, 0)
 }
 
 if(money % amount === 0) ctr++
  
  console.log(stack)
  
  for(var i = 1; i < denominations.length; i++) {
    let stackW = stack.slice(0)
    let leftOver = Infinity;
    while(leftOver >= denominations[i]) {
      let popped = 0;
      
      while(popped < denominations[i]) {
        popped += stackW.pop();
      }
      
      ctr++
  
      leftOver = stackW.reduce((acc, ele) => { return acc + ele}, 0)
  
      }
    }
 return ctr
}
denominationsFunc(4, [1, 2, 3])