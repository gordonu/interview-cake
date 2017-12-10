//TEST CASES
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// var stockPricesYesterday = [10, 9, 8, 7, 6]
// var stockPricesYesterday = [10, 11]

getMaxProfit = (stockPricesYesterday) => {
  
  if(stockPricesYesterday.length < 2) {
    throw new Error('Required: array.length > 2')
  }

  maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
  minPrice = stockPricesYesterday[0];

  for(var i = 1; i < stockPricesYesterday.length; i++) {
    currentPrice = stockPricesYesterday[i]

    maxProfit = Math.max(currentPrice - minPrice, maxProfit)
    minPrice = Math.min(minPrice, currentPrice);

  }


  return maxProfit
}

getMaxProfit(stockPricesYesterday)
