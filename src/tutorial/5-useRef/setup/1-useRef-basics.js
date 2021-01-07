import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refInput = useRef(null);
  const refHeading = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refInput.current.value);
    console.log(refHeading);
  }

  useEffect(() => {
    console.log(refHeading);
  })

  return <>
    <h2 ref={refHeading}>use ref</h2>
    <form onSubmit={handleSubmit} className="form">
      <input type="text" ref={refInput} />
      <button type="submit">Submit</button>
    </form>
  </>;
};

export default UseRefBasics;
