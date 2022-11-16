import React from 'react';
import Card from '../Card/Card';
import Title from '../Texts/Title';
import classes from './BackProjectSection.module.css';
import MasterCraftLogo from '../../assets/logo-mastercraft.svg';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
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
        <div className={classes.description}>
          <Paragraph
            content="A beautifully handcrafted monitor stand to reduce neck and eye strain."
            type="primary"
          />
        </div>
        <div className={classes['button-section']}>
          <Button type="primary" size="large">
            Back this project
          </Button>
        </div>
      </section>
    </Card>
  );
};

export default BackProjectSection;
