import React from 'react';
import classes from './Title.module.css';

const Title = ({ primary, content }) => {
  if (primary) {
    return <h1 className={classes['primary-heading']}>{content}</h1>;
  }
};

export default Title;
