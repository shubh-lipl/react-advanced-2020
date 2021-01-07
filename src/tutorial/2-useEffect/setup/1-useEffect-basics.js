import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useEffect triggered!!')
    if (value >= 2) {
      document.title = `New Title ${value}`;
    }
  }, [value]);

  useEffect(() => {
    console.log('Rendered only once!!!!')
  }, []);
  console.log('before useEffect triggered!!')
  return <>
    <h2>useEffect Basics</h2>
    <h1>{value}</h1>
    <button type="button" className="btn" onClick={() => setValue(value + 1)}>
      increament
    </button>
  </>;
};

export default UseEffectBasics;
