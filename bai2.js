function findMaxSumArray(arr1, arr2, arr3, arr4) {
    var sums = [arr1.reduce(function (a, b) { return a + b; }), arr2.reduce(function (a, b) { return a + b; }), arr3.reduce(function (a, b) { return a + b; }), arr4.reduce(function (a, b) { return a + b; })];
    return [arr1, arr2, arr3, arr4][sums.indexOf(Math.max.apply(Math, sums))];
}
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var arr4 = [10, 11, 12];
var maxSumArray = findMaxSumArray(arr1, arr2, arr3, arr4);
console.log(maxSumArray); // Output: [10, 11, 12]
