class Calculator {
    constructor(leftOperand, operator, rightOperand) {
        this.leftOperand = leftOperand;
        this.operator = operator;
        this.rightOperand = rightOperand;
    }

    calculate() {
        switch (this.operator) {
            case "+":
                return this.leftOperand + this.rightOperand;
                break;
            case "-":
                return this.leftOperand - this.rightOperand;
                break;
            case "*":
                return this.leftOperand * this.rightOperand;
                break;
            case "/":
                return this.leftOperand / this.rightOperand;
                break;
        }
    }
}

module.exports = Calculator;