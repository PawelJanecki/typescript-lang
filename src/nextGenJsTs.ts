// arrow function
const add = (a: number, b: number) => a + b;
console.log(add(3, 5));
console.log('*****');

const add2 = (a: number, b: number) => {
  return a + b;
};
console.log(add(3, 5));

const add3: (a: number, b: number) => number = (a, b) => a + b;
console.log(add3(3, 5));

const add4: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
console.log(add4(3, 5));

function add5(a: number, b: number): number {
  return a + b;
}
console.log(add5(3, 5));

const reducer = (acc: number, curr: number) => acc + curr;
function add6(...numbers: number[]) {
  return numbers.reduce(reducer, 0);
}
console.log(add6(1, 2, 3));

const add7 = (...numbers: [number, number, number]) => {
  return numbers.reduce(reducer, 0);
};
console.log(add7(1, 2, 3));
// console.log(add7(1, 2, 3, 4))    // error - to much args

// array destructuring
const hobbies = ['swimming', 'cooking', 'driving', 'ridding'];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);

// object destructuring
const person = {
  name: 'Max',
  surname: 'Smith',
  age: 35,
  gender: 'male',
};
const { surname, age } = person;
console.log(surname);
console.log(age);

const { age: howOld } = person;
console.log(howOld);
