function tuple() {
  /**
   * Tuple type defines length of array and type of each position of this array.
   * You can define only whole array in one moment, not separetally.
   *
   * What is important, method `push` has special power to add new value at the end of array,
   * which must be tuple-compliant. This is only one way to extend existing tuple array.
   */

  let tupleArr: [number, string];

  tupleArr = [1, 'abc'];
  tupleArr.push('def');
  tupleArr.push(1);

  console.log(tupleArr);
}

function unionType() {
  /**
   * Union type allow to define more than one type of some value.
   */

  function combine(input1: number | string, input2: number | string) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      return input1 + input2;
    } else {
      return input1.toString() + input2.toString();
    }
  }

  console.log(combine(5, 21));
  console.log(combine('Max', 'Albert'));
}

function literalType() {
  /**
   * Literal type allow refer to specific strings or numbers as allowed type of some value
   */

  function sort(arr: number[], order: 'asc' | 'desc') {
    const sortedAsc = arr.sort();
    if (order === 'asc') {
      return sortedAsc;
    } else {
      return sortedAsc.reverse();
    }
  }

  /**
   * Here literal type is using to declaration of result, which can be equal one of three numbers:
   * -1, 0 or 1.
   */
  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  console.log(sort([5, 2, 4], 'asc'));
  console.log(sort([5, 2, 4], 'desc'));
  // console.log(sort([5, 2, 4], 'custom'));
}

function typeAlias() {
  /**
   * Type aliases help to avoid duplicating literal type, than we can use the same type more than
   * once and refer to it by a single name.
   */

  type Order = 'asc' | 'desc';

  function sort(arr: number[], order: Order) {
    const sortedAsc = arr.sort();
    if (order === 'asc') {
      return sortedAsc;
    } else {
      return sortedAsc.reverse();
    }
  }

  console.log(sort([3, 9, 1], 'desc'));
}

function functionAsType() {
  function add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Function as type describe which type of functions we want to use somewhere.
   */
  let combineValues: (a: number, b: number) => number;
  combineValues = add;

  console.log(combineValues(3, 8));
}

function callback() {
  function addAndHandle(a: number, b: number, callback: (num: number) => void) {
    const result = a + b;
    callback(result);
  }

  addAndHandle(10, 20, (result) => {
    console.log('result: ', result);
  });
}

function unknown() {
  /**
   * Type unknown is similar to any, but is more restrictive. Assignment unknown to some other
   * type like number or string, etc. must be preceded by type checking, ex. by typeof like below.
   */

  let userInput: unknown;
  let userName: string;

  userInput = 5;
  userInput = 'Max';

  userName = 'Valentino';

  if (typeof userInput === 'string') {
    userName = userInput;
  }

  console.log(userInput);
}

function never() {
  /**
   * Type never tell that something never return the result.
   */

  function generateError(msg: string, code: number): never {
    throw { message: msg, errorCode: code };
  }

  try {
    generateError('An error occurred!', 500);
  } catch (error) {
    console.log('Error catched! ', error);
  }
}

tuple();
unionType();
literalType();
typeAlias();
functionAsType();
callback();
unknown();
never();
unknown();
