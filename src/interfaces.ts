// interface as function types
/** type equal to interface impl below
 * type AddFn = (a: number, b: number) => number;
 */
interface AddFn {
  (a: number, b: number): number;
}

let addNumbers: AddFn;
addNumbers = (n1: number, n2: number) => {
  return n1 + n2;
};

// pure interface
interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Paul', 33);
console.log(user1);
user1.outputName = 'Paullll';

user1.greet('Hi there - I am ');
console.log(user1);
// user1.name = 'Max' - name property is readonly, so it impossible to assign new value.

// IMPOERTANT !!! - differences why interface and not type

/** Differences beetwen interface and abstract class:
 * Interfaces has only inforamction about structure (properties and signatures of methods without
 * implementation.)
 * Abstract classes can has properties, abstarct methods(signature that force subclass to having own
 * implementation) and methods with default implementation(it can be overridded of course)
 */
