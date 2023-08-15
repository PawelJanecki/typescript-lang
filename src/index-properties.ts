/** Index properties gives more flexibility for creating objects. It is possible to create obj with
 *  many properties which respect only one rule: property is in string type, but value is always
 * string.
 */
interface ErrorContainer {
  [prop: string]: string;
}

const err: ErrorContainer = {};
const err2: ErrorContainer = {
  abc: 'as',
  // abcd: true  // error
  // true: 'abc'  // error
  // efg: 123  // error
};
