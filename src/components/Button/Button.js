import classNames from 'classnames';
import React from 'react';
import classes from './Button.module.css';

const Button = ({ type, size, children, isDisabled, onClick }) => {
  const btnSizeClass =
    size === 'large' ? classes['btn-large'] : classes['btn-small'];

  if (type === 'primary' && size === 'small') {
    return (
      <button
        className={classNames(
          classes['primary-btn'],
          classes['btn-small'],
          isDisabled && classes['btn-small-disabled']
        )}
      >
        {children}
      </button>
    );
  }
  if (type === 'primary' && size === 'medium') {
    return (
      <button
        className={classNames(
          classes['primary-btn'],
          classes['btn-medium'],

          isDisabled && classes['btn-medium-disabled']
        )}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
  if (type === 'primary') {
    return (
      <button
        className={classNames(classes['primary-btn'], btnSizeClass)}
        onClick={onClick}
      >
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
