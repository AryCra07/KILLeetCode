/**
 * @param {Function} fn
 */
function memoize(fn) {
    const map = new Map();
    return function (...args) {
        const item = args.join(",");
        if (!map.has(item)) {
            map.set(item, fn(...args));
        }
        return map.get(item);
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
