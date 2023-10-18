import React, { useState } from "react";
import { Link } from "react-router-dom";

function Calculator() {
  const [input, setInput] = useState([]);
  const [calString, setCalString] = useState([]);

  const operators = ["+", "-", "*", "/"];

  const handleOperatorClick = (value) => {
    if (input.length !== 0) {
      const result = Number(input.join(""));
      setCalString([...calString, result]);
    }

    if (
      calString !== 0 &&
      operators.includes(calString[calString.length - 1])
    ) {
      const newStr = [...calString];
      newStr[newStr.length - 1] = value;
      setCalString(newStr);
    } else {
      setCalString([...calString, value]);
    }
  };

  console.log("first", calString);

  const handleNumberClick = (value) => {
    const newInput = [...input, value];
    setInput(newInput);
  };
  const handleAllclearClick = () => {
    console.log();
  };
  const handleEqualsClick = () => {
    console.log();
  };
  return (
    <div className="App">
      <Link to="todolist">
        <button>TodoList</button>
      </Link>
      <div className="outerbox">
        <div className="screen">
          <input type="number" className="calculation" />
        </div>
        <div className="operators">
          <p
            className="operatorstyle1"
            onClick={() => handleOperatorClick("+")}
          >
            +
          </p>
          <p
            className="operatorstyle1"
            onClick={() => handleOperatorClick("-")}
          >
            -
          </p>
          <p
            className="operatorstyle1"
            onClick={() => handleOperatorClick("*")}
          >
            *
          </p>
          <p
            className="operatorstyle1"
            onClick={() => handleOperatorClick("/")}
          >
            /
          </p>
        </div>
        <div className="numbers">
          <div className="leftnum">
            <div className="numstyle">
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("1")}
              >
                1
              </p>
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("2")}
              >
                2
              </p>
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("3")}
              >
                3
              </p>
            </div>
            <div className="numstyle">
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("4")}
              >
                4
              </p>
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("5")}
              >
                5
              </p>
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("6")}
              >
                6
              </p>
            </div>
            <div className="numstyle">
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("7")}
              >
                7
              </p>
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("8")}
              >
                8
              </p>
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("9")}
              >
                9
              </p>
            </div>
            <div className="numstyle2">
              <p></p>
              <p
                className="operatorstyle"
                onClick={() => handleNumberClick("0")}
              >
                0
              </p>
              <p
                className="operatorstyle"
                onClick={() => handleAllclearClick()}
              >
                AC
              </p>
            </div>
          </div>
          <div className="equals">
            <p className="equalstyle" onClick={() => handleEqualsClick()}>
              =
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
