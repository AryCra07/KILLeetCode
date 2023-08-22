var TimeLimitedCache = function () {
    this.data = new Map();
    this.timer = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let flag = this.data.has(key);
    this.data.set(key, value);
    clearTimeout(this.timer[key]);
    this.timer[key] = setTimeout(() => {
        this.data.delete(key);
    }, duration);
    return flag;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.data.has(key) ? this.data.get(key) : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.data.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
