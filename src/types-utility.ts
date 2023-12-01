/**
 * PARTIAL
 * Creates a type with all properties of given type setted to optional.
 */
function runPartial() {
  interface Todo {
    title: string;
    description: string;
  }

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
  };
  console.log('todo1: ', todo1);
  console.log('update...');

  const todo2 = updateTodo(todo1, { description: 'throw out trash' });

  console.log('todo1: ', todo2);
}
runPartial();

/**
 * REQUIRED
 * Construtcs a type consisting of all properties of Type set to required. The opposite of PArtial.
 */
function runRequired() {
  interface Props {
    a?: number;
    b?: string;
  }

  const obj: Props = { a: 5 };

  // const obj2: Required<Props> = { a: 5 };
  // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'
}
runRequired();

/**
 * READONLY
 * Constructs a type with all properties of Type setted to readonly.
 */
function runReadonly() {
  interface Todo {
    title: string;
  }

  const todo: Readonly<Todo> = { title: 'Delete inactive users' };

  // todo.title = 'Hello world!' error
  // Cannot assign to 'title' because it is a read-only property.
}
runReadonly();

/**
 * RECORD
 * Constructs an object type whose property keys are Keys and whose property values are Type.
 * This utility can be used to map the properties of a type to another type.
 */
function runRecord() {
  interface CatInfo {
    age: number;
    breed: string;
  }

  type Catname = 'miffy' | 'boris' | 'mordred';

  const cats: Record<Catname, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
  };

  console.log('cats: ', cats);
  console.log('update boris');

  cats.boris.age = 8;
  console.log('boris: ', cats.boris);
}
runRecord();

/**
 * PICK
 * Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 */
function runPick() {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, 'title' | 'completed'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  };

  console.log('todo: ', todo);
}
runPick();

/**
 * OMIT
 * Constructs a type by picking all properties from Type and then removing Keys
 * (string literal or union of string literals). The opposite of Pick.
 */
function runOmit() {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }

  type TodoPreview = Omit<Todo, 'description'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
    createdAt: 1615544252770,
  };

  console.log('todo: ', todo);
}
runOmit();
