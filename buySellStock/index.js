// Best Time to Buy and Sell Stock II
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

// You are given an integer array prices where prices[i] is
// the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock.
// You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the
// same day.

// Find and return the maximum profit you can achieve.

var buySellStock = function(prices) {
	let profit = 0;
	let currentPrice = 0;
	let haveStock = false;
	let sellIndex = 0;
	
	for(let priceIndex = 0; priceIndex < prices.length; priceIndex++) {
		const day = priceIndex + 1;
		currentPrice = prices[priceIndex];
		const nextPrice = prices[priceIndex+1];

		console.log(`Day ${day}. Price ${currentPrice}`);

		if(priceIndex === sellIndex && haveStock) {
			profit += currentPrice;
			haveStock = false;
			console.log(`Selling on day ${day} at ${currentPrice}. Profit: ${profit}`);
		}

		if(nextPrice > currentPrice && !haveStock) {
			
			//find optimal sell day
			sellIndex = prices.length - 1;
			for(let futurePriceIndex = priceIndex+1; futurePriceIndex < prices.length; futurePriceIndex++) {
				const futurePrice = prices[futurePriceIndex];
				const futureNextPrice = prices[futurePriceIndex+1];
				if(futurePrice > currentPrice && futureNextPrice < futurePrice) {
					sellIndex = futurePriceIndex;
					break;
				}
			}
			
			// buy
			profit -= currentPrice;
			haveStock = true;
			console.log(`Buying on day ${day} at ${currentPrice}. Will sell on day ${sellIndex+1}. Profit: ${profit}`);
		}
	}
	
	return profit;
};

module.exports = buySellStock;