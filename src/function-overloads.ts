function add_fo(a: string, b: string): string;
function add_fo(a: number, b: number): number;
function add_fo(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add_fo('Pawel', ' Janecki');
result.split('');

/**
 * Instead of casting to string after add method, we can use overloadis of method.
 * Then, after calling add() with args as strings, the compiler knows that the result will be also
 * a string.
 */
