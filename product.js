"use strict";
exports.__esModule = true;
exports.calcAverageProductPrice = void 0;
var products = [
    { name: 'table', price: 200 },
    { name: 'chair', price: 40 },
    { name: 'book', price: 20 },
];
var calcAverageProductPrice = function (arr) {
    if (arr) {
        var sum = arr.map(function (item) { return item.price; }).reduce(function (prev, curr) { return prev + curr; });
        var avgPrice = sum / arr.length;
        return avgPrice;
    }
    else {
        return 0;
    }
};
exports.calcAverageProductPrice = calcAverageProductPrice;
var result = calcAverageProductPrice(products);
console.log(result);
