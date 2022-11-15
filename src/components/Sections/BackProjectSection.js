import React from 'react';
import Card from '../Card/Card';
import Title from '../Texts/Title';
import classes from './BackProjectSection.module.css';
import MasterCraftLogo from '../../assets/logo-mastercraft.svg';
const BackProjectSection = () => {
  return (
    <Card primary={true}>
      <section className={classes['backproject-section']}>
        <img
          src={MasterCraftLogo}
          alt=""
          className={classes['logo-mastercraft']}
        />
        <div className={classes['title-box']}>
          <Title primary={true} content="Mastercraft Bamboo Monitor Riser" />
        </div>
      </section>
    </Card>
  );
};

export default BackProjectSection;
