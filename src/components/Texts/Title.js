import React from 'react';
import classes from './Title.module.css';

const Title = ({ primary, secondary, size, children }) => {
  if (secondary) {
    return <h3 className={classes['secondary-heading']}>{children}</h3>;
  }
  if (primary && !size) {
    return <h1 className={classes['primary-heading']}>{children}</h1>;
  }
  if (!primary && !size) {
    return <h1 className={classes['primary-digits']}>{children}</h1>;
  }
  if (primary && size === 'small') {
    return <h3 className={classes['primary-small-heading']}>{children}</h3>;
  }
};

export default Title;
