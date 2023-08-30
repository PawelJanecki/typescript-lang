function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Paul' }, { age: 33 });
const mergedObj2 = merge({ name: 'Paul', hobbies: ['Sport'] }, { age: 33 });
// const mergedObj3 = merge({ name: 'Paul' }, 33); // it doesn't work because we make constraint that every args must be an object.
console.log(mergedObj.age);
console.log(mergedObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sport', 'Cooking']));
console.log(countAndDescribe([]));
console.log(countAndDescribe([1]));

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Paul', age: 33 }, 'age'));

// Generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Paul');
textStorage.addItem('Paul2');
textStorage.addItem('Paul3');
textStorage.removeItem('Paul2');
console.log(textStorage.getItems());
// textStorage.addItem(33); // error
