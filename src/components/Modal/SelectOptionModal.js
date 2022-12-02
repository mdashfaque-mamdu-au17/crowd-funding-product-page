import React, { useState } from 'react';
import Modal from './Modal';
import { CloseModalIcon } from '../Button/CloseModalIcon';
import Paragraph from '../Texts/Paragraph';
import classes from './SelectOptionModal.module.css';
import SelectBox from '../Card/SelectBox';

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

        <div className={classes['para-div']}>
          <Paragraph
            type="primary"
            content="Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? "
          />
        </div>

        <div>
          <SelectBox />
        </div>
      </section>
    </Modal>
  );
};

export default SelectOptionModal;

// type="select-pledge", type="welcome-modal", type="menu-modal"
