const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let input = req.body['calculator'];

        let leftOperand = Number(input.leftOperand);
        let operator = input.operator;
        let rightOperand = Number(input.rightOperand);

        let calculator = new Calculator(leftOperand, operator, rightOperand);

        let result = calculator.calculate();

        res.render('home/index', {calculator: calculator, result: result});
    }
};