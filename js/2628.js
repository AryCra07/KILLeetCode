/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (o1 === o2) return true;
    if (
        Object.prototype.toString.call(o1) !==
        Object.prototype.toString.call(o2)
    )
        return false;

    if (typeof o1 !== "object") return o1 === o2;

    if (Array.isArray(o1)) {
        if (o1.length !== o2.length) return false;

        for (let i = 0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) return false;
        }
    }

    if (Object.keys(o1).length !== Object.keys(o2).length) return false;

    for (let key in o1) {
        if (!areDeeplyEqual(o1[key], o2[key])) return false;
    }

    return true;
};
