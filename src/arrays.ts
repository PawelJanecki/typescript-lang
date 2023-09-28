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
