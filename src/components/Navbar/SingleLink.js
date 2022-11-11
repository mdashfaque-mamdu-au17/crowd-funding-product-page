import React from 'react';
import classes from './SingleLink.module.css';

const SingleLink = ({ title }) => {
  return (
    <a href="#" className={classes.link}>
      {title}
    </a>
  );
};

export default SingleLink;
