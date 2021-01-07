import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <h2>show/hide</h2>
      <button className='btn' onClick={() => setShow(!show)}>
        Toggle Error
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const changeWidth = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, [])

  return (
    <>
      <h3 style={{ 'marginTop': '2rem' }}>Width</h3>
      <h1>{size} PX</h1>
    </>
  )
}

export default ShowHide
