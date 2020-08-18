import {assertNumber} from './assert.mjs';

function add(first, second) {
    assertNumber(first);
    assertNumber(second);

    return first + second;
}

function multiply(first, second) {
    assertNumber(first);
    assertNumber(second);
    return first * second;
}

export {
    add,
    multiply
};
