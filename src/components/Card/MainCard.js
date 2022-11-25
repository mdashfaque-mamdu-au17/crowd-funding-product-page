import React from 'react';
import classes from './MainCard.module.css';
import BackProjectSection from '../Sections/BackProjectSection';
import BackedDetailsSection from '../Sections/BackedDetailsSection';
import AboutProject from '../Sections/AboutProject';
const MainCard = ({ onOpen, children }) => {
  return (
    <div className={classes['main-card']}>
      <section>
        <div className={classes['backproject-section']}>
          <BackProjectSection onOpen={onOpen} />
        </div>
        <div className={classes['backed-details-section']}>
          <BackedDetailsSection />
        </div>
        <div className={classes['about-project-section']}>
          <AboutProject />
        </div>
      </section>
    </div>
  );
};

export default MainCard;
