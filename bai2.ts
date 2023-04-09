function findMaxSumArray(arr1, arr2, arr3, arr4) {
    const sums = [arr1.reduce((a, b) => a + b), arr2.reduce((a, b) => a + b), arr3.reduce((a, b) => a + b), arr4.reduce((a, b) => a + b)];
    return [arr1, arr2, arr3, arr4][sums.indexOf(Math.max(...sums))];
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arr4 = [10, 11, 12];
const maxSumArray = findMaxSumArray(arr1, arr2, arr3, arr4);
console.log(maxSumArray);
