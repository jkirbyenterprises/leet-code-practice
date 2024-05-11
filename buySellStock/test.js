const buySellStock = require('./index');

test('buySellStock function exists', () => {
	expect(typeof buySellStock).toEqual('function');
});

test('buySellStock returns the maximum profit', () => {	
	const prices = [7,1,5,3,6,4];
	expect(buySellStock(prices)).toEqual(7);
});

test('buySellStock will wait to sell until highest price', () => {	
	const prices = [1,2,3,4,5];
	expect(buySellStock(prices)).toEqual(4);
});

test('buySellStock will not buy if price keeps dropping', () => {	
	const prices = [7,6,4,3,1];
	expect(buySellStock(prices)).toEqual(0);
});