// ver. 1
const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')!
);
userInputElement.value = 'Hi there!';

// ver. 2
const userInputElement2 = document.getElementById(
  'user-input-2'
)! as HTMLInputElement;
userInputElement2.value = 'Hie there 2!';

/**
 * ! at the end of expression tell us that we know that this thing in general means it is possibly
 * null but we are sure that in this case it won't be a null.
 */
