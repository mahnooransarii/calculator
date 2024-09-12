class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

const calculator = new Calculator();

const a = 10;
const b = 5;

console.log(`Addition: ${calculator.add(a, b)}`);
console.log(`Subtraction: ${calculator.subtract(a, b)}`);
console.log(`Multiplication: ${calculator.multiply(a, b)}`);
console.log(`Division: ${calculator.divide(a, b)}`);
