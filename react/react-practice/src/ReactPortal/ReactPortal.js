// src/App.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function ReactPortal() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const searchInputBoxParentElement  = document.querySelector('.search-input-box-parent-element')
  //   const closeElement = document.createElement('span');
  //   closeElement.textContent = 'x'
  //   searchInputBoxParentElement.appendChild(closeElement);
  // }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => setIsOpen(true)}>Click to Open Modal</button>
        {/* <Link to='/'>to HigherOrderComp</Link> */}
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          This is Modal Content!
        </Modal>
      </header>
    </div>
  );
}

export default ReactPortal;
