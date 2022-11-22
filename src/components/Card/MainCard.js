import React from 'react';
import classes from './MainCard.module.css';
import BackProjectSection from '../Sections/BackProjectSection';
import BackedDetailsSection from '../Sections/BackedDetailsSection';
const MainCard = ({ children }) => {
  return (
    <div className={classes['main-card']}>
      <section>
        <div className={classes['backproject-section']}>
          <BackProjectSection />
        </div>
        <div className={classes['backed-details-section']}>
          <BackedDetailsSection />
        </div>
      </section>
    </div>
  );
};

export default MainCard;
