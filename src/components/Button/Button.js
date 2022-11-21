import classNames from 'classnames';
import React from 'react';
import classes from './Button.module.css';

const Button = ({ type, size, children }) => {
  const btnSizeClass =
    size === 'large' ? classes['btn-large'] : classes['btn-small'];
  if (type === 'primary') {
    return (
      <button className={classNames(classes['primary-btn'], btnSizeClass)}>
        {children}
      </button>
    );
  }
  if (type === 'secondary') {
    return (
      <button className={classNames(classes['secondary-btn'])}>
        {children}
      </button>
    );
  }
};

export default Button;
