import React from 'react';
import classes from './Title.module.css';

const Title = ({ primary, children }) => {
  if (primary) {
    return <h1 className={classes['primary-heading']}>{children}</h1>;
  }
  if (!primary) {
    return <h1 className={classes['primary-digits']}>{children}</h1>;
  }
};

export default Title;
