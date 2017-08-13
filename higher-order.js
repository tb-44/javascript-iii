// FILTER, MAP, REDUCE CODE  - HIGHER ORDER JAVASCRIPT

const mixedNumbers = [6,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];

let evenNumbers = mixedNumbers.filter(function(element){
  return element % 2 === 0;
});

// The map function also takes a callback with the parameters
// function(element, index, wholeArray){}  Function Form

const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];

let postTaxPrices = prices.map(function(element){
  return element * 1.07;
});

// Below we have an array of populations.
// We want to use a reduce to calculate the sum of all the populations.

const populations = [8175133, 3792621, 2695598, 2100263]

let totalPopulation = populations.reduce(function(sum, current){
    return sum + current;
}, 0);

// Below we have an array of totally unique monsters we want to use a filter
// function to return only the monsters that have a CP of over 200

const monstersInYourPocket = [{"monster":"Bulbabunny","CP":156},{"monster":"Bulbabunny","CP":135},
{"monster":"Bulbabunny","CP":250},{"monster":"Ponylopse","CP":277},{"monster":"Ponylopse","CP":184},
{"monster":"Pikadoughnet","CP":207},{"monster":"Bulbabunny","CP":139},{"monster":"Pikadoughnet","CP":47},
{"monster":"Pikadoughnet","CP":175},{"monster":"WaterHorsia","CP":26},{"monster":"Ponylopse","CP":19},
{"monster":"Pikadoughnet","CP":218},{"monster":"Charaflier","CP":101},{"monster":"WaterHorsia","CP":96},
{"monster":"Pikadoughnet","CP":253},{"monster":"Sandmush","CP":146},{"monster":"Bulbabunny","CP":247},
{"monster":"Charaflier","CP":55},{"monster":"Bulbabunny","CP":72},{"monster":"Pikadoughnet","CP":300},
{"monster":"Sandmush","CP":262},{"monster":"Sandmush","CP":25},{"monster":"Charaflier","CP":215},
{"monster":"Ponylopse","CP":125},{"monster":"Bulbabunny","CP":178}]

// let myStrongest = monstersInYourPocket.filter(function (e){
//   return e.CP > 200
// });

let myStrongest = monstersInYourPocket.filter((e) => e.CP > 200);
// console.log(myStrongest);

// Below we have an array of orders.  but they all have different tax rates.
// We want to make a new array of total prices.
const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
{"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
{"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
{"price":48,"tax":0.13}]

var ordersTotal = orders.map(function(e){
  return e.price + e.tax;
});

var sum = ordersTotal.reduce(add, 0);
function add(a,b){
  return a + b;
}
// let ordersTotal = orders.map((e) => e.price + e.tax);
// console.log(sum);

// We want to create a total for the purcahses
const purchases = [{"owner":"Barry","price":103},{"owner":"Bob","price":75},
{"owner":"Bob","price":73},{"owner":"Barry","price":57},{"owner":"Barry","price":128},
{"owner":"Bob","price":119},{"owner":"Barry","price":133},{"owner":"Barry","price":27},
{"owner":"Barry","price":138},{"owner":"Bob","price":68},{"owner":"Bob","price":50},
{"owner":"Barry","price":9},{"owner":"Bob","price":123},{"owner":"Bob","price":135},
{"owner":"Barry","price":30},{"owner":"Barry","price":129},{"owner":"Barry","price":38},
{"owner":"Bob","price":133},{"owner":"Barry","price":109},{"owner":"Bob","price":115}]

let bobsTotal = purchases.reduce((c,n) => c + n.price, 0);
// console.log(bobsTotal);
