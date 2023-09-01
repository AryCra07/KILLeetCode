/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    while (n-- > 0 && arr.some(Array.isArray)) arr = [].concat(...arr);
    return arr;
};
