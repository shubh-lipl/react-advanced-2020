import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    <h1>short circuit</h1>
    {/* <h3>text : {text}</h3>
    <h3>firstValue : {firstValue}</h3>
    <h3>secondValue : {secondValue}</h3> */}
    <button className="btn" onClick={() => setIsError(!isError)}>Toggle Error</button>
    {isError
      ? <h3 style={{ 'marginTop': '2rem' }}>there is error</h3>
      : <h3 style={{ 'marginTop': '2rem' }}>there is no error</h3>
    }
    {/* {text || <h3>firstValue</h3>}
    {text && <h3>secondValue</h3>}
    {text || <FistValue />}
    {!text && <SecondValue />} */}
  </>;
};

// const FistValue = () => {
//   return <h2>FirstValude Compo</h2>
// }
// const SecondValue = () => {
//   return <h2>SecondValue Compo</h2>
// }

export default ShortCircuit;
