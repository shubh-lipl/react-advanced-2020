import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const onDelayChange = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevValue) => {
        return prevValue + 1;
      })
    }, 2500)
  }
  return <>
  <h2>useState counter example</h2>
  <h1>{value}</h1>
  <button type="button" className="btn" onClick={() => setValue( value - 1)}>Deacrement</button>
  <button type="button" className="btn" onClick={() => setValue(0)}>Reset</button>
  <button type="button" className="btn" onClick={() => setValue( value + 1)}>Increment</button>

  <div className="container">
    <h1>{value}</h1>
    <button type="button" className="btn" onClick={onDelayChange}>Deacrement</button>
  </div>
  </>;
};

export default UseStateCounter;
