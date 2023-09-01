/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    const res = {};
    for (let item of this) {
        const key = fn(item);
        if (!res.hasOwnProperty(key)) res[key] = [];
        res[key].push(item);
    }
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
