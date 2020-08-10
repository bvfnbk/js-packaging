const square = require('./sqare');
const cube = require('./cube');

class Math {
    static square(value) {
        return square(value);
    }

    static cube(value) {
        return cube(value);
    }
}

module.exports = {
    Math
};
