/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

for (var i = 1; i <= 100; i++ ) {
  
  if (i%3 === 0) {  
    if (i%5 == 0) {
      console.log("fizzbuzz");
    } else {
      console.log("Fizz");
    }
  } 
  else if (i%5 === 0) {
    console.log("Buzz");
  } 
  else {
    console.log(i);
  }
  
}