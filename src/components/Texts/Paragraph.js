import React from 'react';
import classes from './Paragraph.module.css';

const Paragraph = ({ type, content }) => {
  const classType =
    type === 'primary' ? classes['para-primary'] : classes['para-secondary'];
  if (type === 'primary' || type === 'secondary') {
    return <p className={classType}>{content}</p>;
  }
  if (type === 'primaryAmount') {
    return (
      <p className={classes['primary-amount']}>Pledge ${content} or more</p>
    );
  }
};

export default Paragraph;
