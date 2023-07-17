import  { useState } from 'react';
import './Modal.css';

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
close             </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal

