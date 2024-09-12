var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    };
    return Calculator;
}());
var calculator = new Calculator();
var a = 10;
var b = 5;
console.log("Addition: ".concat(calculator.add(a, b)));
console.log("Subtraction: ".concat(calculator.subtract(a, b)));
console.log("Multiplication: ".concat(calculator.multiply(a, b)));
console.log("Division: ".concat(calculator.divide(a, b)));
