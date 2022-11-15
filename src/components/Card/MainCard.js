import React from 'react';
import classes from './MainCard.module.css';
import BackProjectSection from '../Sections/BackProjectSection';
const MainCard = ({ children }) => {
  return (
    <div className={classes['main-card']}>
      <section>
        <BackProjectSection />
      </section>
    </div>
  );
};

export default MainCard;
