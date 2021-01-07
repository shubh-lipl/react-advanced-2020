import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal, people }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal()
    }, 3000);
    return () => {
      clearTimeout(timeout);
    }
  }, [people])
  return <div className='modal'>
    <p>{modalContent}</p>
  </div>;
};

export default Modal;
