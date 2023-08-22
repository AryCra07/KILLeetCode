/**
 * @param {Function} fn
 */
function memoize(fn) {
    let argsPool = new Map();
    let argsString = new Map();
    let id = 0;
    return function (...args) {
        let key = "";
        for (let item of args) {
            if (!argsPool.has(item)) argsPool.set(item, id++);
            key += argsPool.get(item) + ",";
        }
        if (argsString.has(key)) {
            return argsString.get(key);
        } else {
            const res = fn(...args);
            argsString.set(key, res);
            return res;
        }
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
