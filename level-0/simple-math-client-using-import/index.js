// Common-JS does not support named exports -> import default...
import simple_math from 'simple-math';

// ...and destructure:
const {add, multiply} = simple_math;

console.log(multiply(add(2,3), 4));
