import React from 'react';
import classes from './Paragraph.module.css';

const Paragraph = ({ type, content }) => {
  const classType =
    type === 'primary' ? classes['para-primary'] : classes['para-secondary'];
  return <p className={classType}>{content}</p>;
};

export default Paragraph;
