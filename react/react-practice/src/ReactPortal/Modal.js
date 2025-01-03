// src/components/Modal/Modal.js
import { useEffect, useRef } from 'react';
import ReactPortalWrapper from './ReactPortalWrapper';
import { CSSTransition } from 'react-transition-group';
import './ModalStyle.css';
function Modal({ children, isOpen, handleClose }) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortalWrapper wrapperId='react-portal-modal-container'>
      <div className='modal'>
        <button onClick={handleClose} className='close-btn'>
          Close
        </button>
        <div className='modal-content'>{children}</div>
      </div>
    </ReactPortalWrapper>
  );
}

export default Modal;
