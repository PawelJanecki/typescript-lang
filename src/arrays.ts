console.log('\n******************** for..of');
/**
 * for..of loop
 */

function forOf() {
  const arr = [1, 2, 3];
  for (const item of arr) {
    console.log('item: ', item);
  }
}
forOf();

console.log('\n******************** .at()');

/**
 * .at(index: number)
 * It takes an integer argument and returns item at that index. Both positive and negative numbers
 * are allowed. Negative integers count back from the last item in the array.
 */

function at() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  console.log(arr.at(2)); // result: c
  console.log(arr.at(-2)); // result: d
  console.log(arr.at(-6)); // result: undefined, because arr has only 5 elements.
}
at();

console.log('\n******************** .concat()');

/**
 * .concat(arr: any[])
 * This method merge two arrays or more in new one.
 */

function concat() {
  const arr1 = ['a', 'b', 'c'];
  const arr2 = ['e', 'f', 'g'];
  const arr3 = ['x', 'y', 'z'];
  const result = arr1.concat(arr2, arr3);
  console.log(result);
}
concat();

console.log('\n******************** .copyWithin()');

/**
 * .copyWithin(targetIndex: number, startIndex: number, endIndex?: number)
 * This method shallow copies part of array to another location in the same array and returns
 * this array back, without modyfing its length.
 */
function copyWithin() {
  const arr1 = ['a', 'b', 'c', 'd', 'e'];
  let arr1Temp = arr1.copyWithin(1, 4);
  arr1Temp[1] = 'x';
  console.log(arr1Temp);

  const arr2 = [{ v: 'a' }, { v: 'b' }, { v: 'c' }, { v: 'd' }];
  let arr2Temp = arr2.copyWithin(1, 3);
  arr2Temp[1].v = 'x';
  console.log(arr2Temp);
}
copyWithin();

console.log('\n******************** .entries()');

/**
 * .entries()
 *  It returns a new array iterator object that contains pair of key(index in array) and value.
 */
function entries() {
  const arr = ['a', 'b', 'c'];
  const iterator = arr.entries();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}
entries();

console.log('\n******************** .every()');

/**
 * .every(predicate: () => {})
 * It tests all elements in the array by predicate given in argument and returns boolean result.
 */
function every() {
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.every((e) => e < 10));
  console.log(arr.every((e) => e < 4));
  console.log(
    arr.every((e) => {
      if (e < 7) return true;
      return false;
    })
  );
}
every();

console.log('\n******************** .fill()');

/**
 * .fill(newValue: any, startIndex: number, endIndex?: number)
 * Modyfies the array by given argument from start position to the end or to given index.
 * It do not creates the new one!
 */
function fill() {
  const arr1 = [1, 2, 3, 4, 5];
  arr1.fill(9, 2);
  console.log(arr1);

  const arr2 = [1, 2, 3, 4, 5];
  arr2.fill(9, 1, 3);
  console.log(arr2);

  const arr3 = [1, 2, 3, 4, 5];
  arr3.fill(9, 1, 7);
  console.log(arr3);

  const arr4 = [1, 2, 3, 4, 5];
  arr4.fill(9);
  console.log(arr4);
}
fill();

console.log('\n******************** .filter()');

/**
 * .filter(predicate: () => {})
 * Creates a shallow copy of this arrays elements which one pass the test given in argument and
 * returns it back.
 */
function filter() {
  const arr = [0, 1, 2, 3, 4, 5, 6];
  console.log(arr.filter((e) => e % 2 === 0));
}
filter();

console.log('\n******************** .find()');
/**
 * .find(predicate: () => {})
 * Returns the first element of array that satisfies the provided testing function as argument.
 * If no values satisfy the testing function, undefined will be returned.
 */
function find() {
  const arr = [1, 2, 4, 1, 7];
  console.log(arr.find((e) => e > 3));
  console.log(arr.find((e) => e > 8));
}
find();

console.log('\n******************** .findIndex()');
/**
 * .findIndex(predicate: () => {}, callback?: () => {})
 * Method returns the index of first element in an array that satisfies the provided predicate.
 * If no elements satisfy, returns -1 value.
 */
function findIndex() {
  const arr = [3, 5, 1, 7];

  console.log(arr.findIndex((e) => e > 4)); // result: 1
}
findIndex();

console.log('\n******************** .findLast()');
/**
 * .findLast(predicate: () => {})
 * Returns first element which pass the provided testing function in reversed array.
 * If no elements satisfy, returns undefined.
 */
function findLast() {
  const arr = [3, 5, 2, 8, 4];

  console.log(arr.findLast((e) => e > 4)); // result: 8
}
findLast();

console.log('\n******************** .findLastIndex()');
/**
 * .findLastIndex(predicate: () => {})
 * Method returns index of elements which pass the proviced testing function in reversed array.
 * If no elements satisfy, return -1 value.
 */
function findLastIndex() {
  const arr = [3, 5, 2, 8, 4];

  console.log(arr.findLastIndex((e) => e > 4)); // result: 3
}
findLastIndex();

console.log('\n******************** .flat()');
/**
 * .flat(depth?: number | 'Infinity')
 * Method creates new array with all sub-array elements concatenated into it recursively up to
 * the specified depth in optional argument. Default value of depth is 1.
 */
function flat() {
  const arr = [0, 1, [2, [3, [4, 5]]]];

  console.log(arr.flat()); // result: [ 0, 1, 2, [ 3, [ 4, 5 ] ] ]
  console.log(arr.flat(Infinity)); // result: [ 0, 1, 2, 3, 4, 5 ]
  console.log(arr.flat(2)); // result: [ 0, 1, 2, 3, [ 4, 5 ] ]
}
flat();

console.log('\n******************** .flatMap()');
/**
 * .flatMap(function: () => {})
 * Creates new array formed by applying a given function to each element of the array and then
 * flattening the result by one level. Its equal to arr.map(() = {}).flat(1).
 */
function flatMap() {
  const arr = [1, 2, 3];
  console.log(arr.flatMap((e) => (e % 2 !== 1 ? [3, [4, 5]] : 1)));
  console.log('Preview step by step:');
  const arrTemp = arr.map((e) => (e % 2 !== 1 ? [3, [4, 5]] : 1));
  console.log(arrTemp);
  console.log(arrTemp.flat(1));
}
flatMap();

console.log('\n******************** .forEach()');
/**
 * .forEach(function: () => {})
 * Methods executes provided function for each element of an array.
 */
function forEach() {
  const arr = [1, 2, 3, 4];
  arr.forEach((e) => console.log('e: ', e));
}
forEach();

console.log('\n******************** .from()');
/**
 * .from(arrLike: iterable-object or array, mapFn?: mapFunction, thisArg?: ?)
 * It creates shalow copy of array or array which contains element from array-like object.
 */
function from() {
  console.log(Array.from('abc')); // result: ['a', 'b', 'c'];
  console.log(Array.from([1, 2, 3], (e) => e * 2)); // result: [2, 4, 6];
}
from();

console.log('\n******************** .includes()');
/**
 * .includes(searchElement: number | string | boolean, startIndex?: number)
 * Returns true if that array contains certain value among the entries, false otherwise.
 */
function includes() {
  console.log([1, 2, 3].includes(1));
  console.log([1, 2, 3].includes(1, 1));
  console.log(['a', 'b', 'c'].includes('b'));
}
includes();

console.log('\n******************** .indexOf()');
/**
 * .indexOf(searchElement: number | string)
 * Returns index of first element at which a given element can be found in the array, otherwise -1.
 */
function indexOf() {
  console.log([1, 2, 3, 2].indexOf(2)); // result: 1
}
indexOf();

console.log('\n******************** .isArray()');
/**
 * .isArray(value: any)
 * Method checks that given parm is an array and returns true or false.
 */
function isArray() {
  console.log(Array.isArray('ad')); // result: false
  console.log(Array.isArray(['ad', 12])); // result: true
  console.log(Array.isArray([...'txt'])); // result: true
}
isArray();

console.log('\n******************** .join()');
/**
 * .join(separator?: strign)
 * Method returns new string created by concatenate all elements of an array with given optional
 * seprator (default separator is comma).
 */
function join() {
  console.log([1, 2, 3, 4].join());
  console.log([1, 2, 3, 4].join('-'));
}
join();

console.log('\n******************** .keys()');
/**
 * .keys(arr: any[])
 * Method returnsa new array iterator object with the keys for each index in the arr.
 */
function keys() {
  for (let item of ['a', 'b', 'c'].keys()) {
    console.log('key: ', item);
  }
}
keys();

console.log('\n******************** .lastIndexOf()');
/**
 * .lastIndexOf(searchElement)
 * Returns last index of element which given element can be found in an array, -1 otherwise.
 */
function lastIndexOf() {
  console.log([1, 2, 3, 2, 5].lastIndexOf(2)); // result: 3
  console.log([1, 2, 3, 2, 5].lastIndexOf(0)); // result: -1
}
lastIndexOf();

console.log('\n******************** .map()');
/**
 * .map(callbackFn)
 * Returns new array with the same length as original and modified each element by given callbackFn
 */
function map() {
  console.log([1, 2, 3].map((e) => e * 2));
}
map();

console.log('\n******************** .of()');
/**
 * .of(element1, element2, ...)
 * Returns new array with elements given as arguments. Type of first argument determines type for
 * each next one.
 */
function of() {
  console.log(Array.of(1, 2, 3));
}
of();

console.log('\n******************** .pop()');
/**
 * .pop()
 * Method removes last element of the array and returns it.
 */
function pop() {
  const arr = [1, 2, 3];
  console.log(arr.pop()); // result: 3
  console.log(arr); // result: [1, 2]
}
pop();

console.log('\n******************** .push()');
/**
 * .push()
 * Method adds given arguments to the array and returns new length of the array.
 */
function push() {
  const arr = [1, 2, 3, 4];
  console.log(arr.push(9)); // resutl: 5
  console.log(arr);
  console.log(arr.push(8, 7, 6)); // result: 8
}
push();

console.log('\n******************** .reduce()');
/**
 * .reduce
 * reduce(callbackFn, initialValue?)
 * Method executed given callback of every element of an array, passing in the return value from the
 * calcualtion on the preceding element. The final result of running reducer across all elements is
 * always single value.
 * Initial value argument is optional, by if it not determined, the first element from arr will be
 * taken as initial value.
 */
function reduce() {
  const arr = [1, 2, 3, 4];
  console.log(
    arr.reduce((acc, curr) => {
      if (curr % 2 === 0) {
        acc = acc + curr;
      }
      return acc;
    }, 0)
  );
  const arr2 = [9, 2, 3, 4];
  console.log(
    arr2.reduce((acc, curr) => {
      if (curr % 2 === 0) {
        acc = acc + curr;
      }
      return acc;
    })
  );
}
reduce();

console.log('\n******************** .reduceRight()');
/**
 * .reduceRight(callBackFn, initialValue?)
 * Do the same what reducer but in different order - from last element of the array to first.
 */
function reduceRight() {
  const arr = ['a', 'b', 'c', 'd'];
  let result: string = '';

  console.log(arr.reduceRight((acc, curr) => acc + curr, result)); // result: dcba
}
reduceRight();

console.log('\n******************** .reverse()');
/**
 * .reverse()
 * Order of all elements will be reversed and reference to the same array will be returned.
 */
function reverse() {
  const arr = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 },
  ];
  const arr2 = arr.reverse();
  arr[0].a = 99;
  console.log(arr);
  console.log(arr2);
}
reverse();

console.log('\n******************** .shift()');
/**
 * .shift()
 * Methods remove first element of the array and returns that element. It changes length of an array.
 */
function shift() {
  const arr = [1, 2, 3, 4];

  const shiftedItem = arr.shift();
  console.log(shiftedItem);
  console.log(arr);
}
shift();

console.log('\n******************** .slice()');
/**
 * .slice(startIndex: number, endIndex?: number)
 * Returns shallow copy of portion of an array into a new array. End index is optional, if it isn't provided, by default will be passed the last index of an array.
 * It doesn't change original array.
 */
function slice() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  console.log(arr.slice(2));
  console.log(arr.slice(2, 3));
}
slice();

console.log('\n******************** .some()');
/**
 * .some(predicate)
 * Checks whether at least one element passes given predicate.
 */
function some() {
  const arr = [1, 2, 3, 4];
  console.log(arr.some((e) => e > 3));
}
some();

console.log('\n******************** .sort()');
/**
 * .sort(compareFn?)
 * Methods changes places of elements in the array and returns reference to the same array.
 * By default sort order is ascending and each element is converting to string, then comparing
 * their sequences of UTF-16 code units values. It's possible to provide custom comperable function.
 */
function sort() {
  const arr = ['X', 'y', 'A', 'C', 'g', 'b'];
  arr.sort();
  console.log(arr); // result: [ 'A', 'C', 'b', 'g', 'x', 'y' ]

  const arr2 = ['X', 'y', 'A', 'C', 'g', 'b'];
  arr2.sort((a, b) =>
    a.toLocaleLowerCase() > b.toLocaleLowerCase()
      ? 1
      : a.toLocaleLowerCase() < b.toLocaleLowerCase()
      ? -1
      : 0
  );
  console.log(arr2); // result: [ 'A', 'b', 'C', 'g', 'X', 'y' ]
}
sort();

console.log('\n******************** .splice()');
/**
 * .splice(startIndex: number, deleteCount?: number, item1?: any, item2?:...)
 * Changes the content of array by removing or replacin existing elements and/or adding new element
 * and returns cutted portion.
 */
function splice() {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(arr.splice(2)); // result: [ 'c', 'd', 'e', 'f' ]
  console.log(arr); // result: [ 'a', 'b' ]
  console.log();

  const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(arr2.splice(2, 2)); // result: [ 'c', 'd' ]
  console.log(arr2); // result: [ 'a', 'b', 'e', 'f' ]
  console.log();

  const arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(arr3.splice(2, 2, 'x'));
  console.log(arr3);
  console.log();

  const arr4 = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(arr4.splice(2, 0, 'x'));
  console.log(arr4);
}
splice();

/**
 * .toLocaleString()
 * Returns string representation of each element of the array converted by locale settings.
 */
function toLocaleString() {
  const date1 = new Date();
  const date2 = new Date();
  date2.setMinutes(date2.getMinutes() - 93);
  const arr = [date1, date2];
  console.log(arr.toLocaleString());
}
toLocaleString();

/**
 * .unshift()
 * Method adds specified elements to the beginning of the array.
 */
function unshift() {
  const arr = [1, 2, 3, 4];
  arr.unshift(9);
  console.log(arr); // resutl: [9, 1, 2, 3, 4]

  arr.unshift(11, 22);
  console.log(arr); // result: [9, 8, 9, 1, 2, 3, 4]
}
unshift();

/**
 * .values()
 * Returns new array iterator object that iterates the value of each element of the array.
 */
function values() {
  const arr = ['x', 'y', 'z'];
  const iterator = arr.values();

  for (const value of iterator) {
    console.log(value);
  }
}
values();
