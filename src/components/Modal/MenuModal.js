import React from 'react';
import Modal from './Modal';
import classes from './MenuModal.module.css';
import classNames from 'classnames';
const MenuModal = () => {
  return (
    <div className={classes['menu-modal-container']}>
      <div className={classes['link-container']}>
        <a
          href="#"
          className={classNames(classes['link'], classes['link-about'])}
        >
          About
        </a>
        <a
          href="#"
          className={classNames(classes['link'], classes['link-discover'])}
        >
          Discover
        </a>
        <a
          href="#"
          className={classNames(classes['link'], classes['link-started'])}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default MenuModal;
