
var TimeLimitedCache = function () {
    this.map = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (this.get(key) != -1) {
        this.map[key] = { value: value, exp: Date.now() + duration }
        return true;
    }
    this.map[key] = { value: value, exp: Date.now() + duration }
    return false
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {

    if (!this.map[key]) {
        return -1;
    }
    if (this.map[key]['exp'] < Date.now()) {
        return -1;
    }
    return this.map[key]['value'];
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0;
    for (let key of Object.keys(this.map)) {
        if (this.get(key) != -1) {
            count++;
        }
    };
    return count;
}
/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */