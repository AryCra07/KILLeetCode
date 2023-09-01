/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    return this.length !== rowsCount * colsCount
        ? []
        : this.reduce((snail, current, index) => {
              let i = index % (2 * rowsCount),
                  j = ~~(index / rowsCount);
              if (i >= rowsCount) {
                  i = 2 * rowsCount - 1 - i;
              }
              snail[i] ??= [];
              snail[i][j] = current;
              return snail;
          }, []);
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
