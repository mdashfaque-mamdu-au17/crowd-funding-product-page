import React from 'react';
import classes from './Card.module.css';

const Card = ({ primary, children }) => {
  const applyClass = primary
    ? classes['card-primary']
    : classes['card-secondary'];
  return <div className={applyClass}>{children}</div>;
};

export default Card;
