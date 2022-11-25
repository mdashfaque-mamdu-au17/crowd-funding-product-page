import React, { useState } from 'react';
import Modal from './Modal';
import { CloseModalIcon } from '../Button/CloseModalIcon';
import classes from './SelectOptionModal.module.css';

const SelectOptionModal = ({ onClose }) => {
  return (
    <Modal type="select-pledge">
      <section className={classes['select-pledge-main']}>
        <div className={classes['select-pledge-heading']}>
          <h3>Back this project</h3>
          <button className={classes['close-btn']} onClick={onClose}>
            <CloseModalIcon />
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default SelectOptionModal;

// type="select-pledge", type="welcome-modal", type="menu-modal"
