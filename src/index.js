'use strict';

module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Expected array, got ${typeof arr}`);
  }

  const copy = arr.slice();
  let { length } = arr;
  let rnd;
  let tmp;

  while (length) {
    rnd = Math.floor(Math.random() * length--);
    tmp = copy[length];
    copy[length] = copy[rnd];
    copy[rnd] = tmp;
  }

  return copy;
};
