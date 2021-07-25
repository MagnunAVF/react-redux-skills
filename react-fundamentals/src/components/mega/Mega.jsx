import "./Mega.css";
import React, { useState } from "react";

const MIN_NUMBERS = 6;
const MAX_NUMBERS = 15;

export default (props) => {
  function generateNotContainedNumber(min, max, array) {
    const randomNumber = parseInt(Math.random() * (max + 1 - min)) + min;

    return array.includes(randomNumber)
      ? generateNotContainedNumber(min, max, array)
      : randomNumber;
  }

  function generateNumbers(n) {
    let quantity = n;
    if (quantity > MAX_NUMBERS || quantity < MIN_NUMBERS) {
      quantity = MIN_NUMBERS;
      setQuantity(quantity);
    }
    const resultNumber = Array(quantity)
      .fill(0)
      .reduce((numbersArray) => {
        const newNumber = generateNotContainedNumber(1, 60, numbersArray);
        return [...numbersArray, newNumber];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return resultNumber;
  }

  const [quantity, setQuantity] = useState(props.quantity || 6);
  const initialNumbers = generateNumbers(quantity);
  const [numbers, setNumbers] = useState(initialNumbers);

  const numbersJSX = numbers.map((number) => {
    return <div key={number}>{number}</div>;
  });

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <div className="Numbers">{numbersJSX}</div>
      <div>
        <label htmlFor="number">Numbers Quantity</label>
        <input
          min={MIN_NUMBERS}
          max={MAX_NUMBERS}
          id="number"
          type="number"
          value={quantity}
          onChange={(e) => {
            const newValue = +e.target.value;
            setQuantity(newValue);
            setNumbers(generateNumbers(newValue));
          }}
        />
      </div>
      <button onClick={(_) => setNumbers(generateNumbers(quantity))}>
        Generate Numbers
      </button>
    </div>
  );
};
