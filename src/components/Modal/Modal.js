import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => {
  return <div className={classNames(classes.backdrop)}></div>;
};

const ModalOverlay = ({ type, children }) => {
  let modalType;
  if (type === 'select-pledge') {
    modalType = 'select-pledge';
  }
  if (type === 'welcome-modal') {
    modalType = 'welcome-modal';
  }
  if (type === 'menu-modal') {
    modalType = 'menu-modal';
  }
  return (
    <div className={classNames(classes.modal, classes[modalType])}>
      {children}
    </div>
  );
};

const portalElement = document.getElementById('overlay');
const Modal = ({ type, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay type={type}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
