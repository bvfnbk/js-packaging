function square(value) {
    const valueType = typeof value;
    if (valueType === 'undefined') {
        throw new Error('Given value is not defined.');
    }
    if (value === null) {
        throw new Error('Given value is null.');
    }
    if (valueType !== 'number') {
        throw new Error('Given value is not a njumber.');
    }
    return value * value;
}

module.exports = {
    square
};
