import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleInput1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperation = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let calculationResult;

    switch (operator) {
      case "+":
        calculationResult = number1 + number2;
        break;
      case "-":
        calculationResult = number1 - number2;
        break;
      case "*":
        calculationResult = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        calculationResult = number1 / number2;
        break;
      default:
        setResult("Invalid operator");
        return;
    }

    setResult(`Result: ${calculationResult}`);
  };

  return (
    <div className="calculator-container">
      <input
        type="number"
        className="input-field"
        value={num1}
        onChange={handleInput1Change}
        placeholder="Enter number"
      />
      <input
        type="number"
        className="input-field"
        value={num2}
        onChange={handleInput2Change}
        placeholder="Enter number"
      />
      <div className="button-container">
        <button  onClick={() => handleOperation("-")}>Subtraction (-)</button>
        <button  onClick={() => handleOperation("*")}>Multiplication (*)</button>
        <button  onClick={() => handleOperation("+")}>Addition (+)</button>
        <button  onClick={() => handleOperation("/")}>Division (/)</button>
      </div>
      <div className="output">{result}</div>
    </div>
  );
};

export default Calculator;