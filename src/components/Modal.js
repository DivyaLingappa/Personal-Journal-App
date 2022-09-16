import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../App.css';

const Modal = ({open, closeHandler}) => {
  if(!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className='modal-background'>
        <div className='modal-dialog'>
            <h1 className='modal-heading'>Submitted!!</h1>
            <Link to='/'><button className='btn-close' onClick={closeHandler}>Go to Home</button></Link>
        </div>
      </div>
    </>,
  document.getElementById('portal'));
}

export default Modal;
