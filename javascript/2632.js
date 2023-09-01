var curry = function (fn) {
    return function curried(...args) {
        return args.length >= fn.length
            ? fn.apply(this, args)
            : (...newArgs) => curried.apply(this, args.concat(newArgs));
    };
};
