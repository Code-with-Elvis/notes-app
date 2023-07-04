const add = (a, b) => a + b ;
const substract = (a, b) => a - b ;
const multiply = (a, b) => a * b ;
const divide = (a, b) => a / b ;

module.exports = {add, substract, multiply, divide}


//OR we can simply export this way

exports.add = (a, b) => a + b ;
exports.substract = (a, b) => a - b ;
exports.multiply = (a, b) => a * b ;
exports.divide = (a, b) => a / b ;