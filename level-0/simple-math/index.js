const {assertNumber} = require('./assert');


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


module.exports = {
    add,
    multiply
};
