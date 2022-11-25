import React from 'react';
import Card from '../Card/Card';
import Title from '../Texts/Title';
import classes from './BackProjectSection.module.css';
import MasterCraftLogo from '../../assets/logo-mastercraft.svg';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import BookMarkIcon from '../Button/BookMarkIcon';

const BackProjectSection = ({ onOpen }) => {
  return (
    <Card primary={true}>
      <section className={classes['backproject-section']}>
        <img
          src={MasterCraftLogo}
          alt=""
          className={classes['logo-mastercraft']}
        />
        <div className={classes['title-box']}>
          <Title primary={true}>Mastercraft Bamboo Monitor Riser</Title>
        </div>
        <div className={classes.description}>
          <Paragraph
            content="A beautifully handcrafted monitor stand to reduce neck and eye strain."
            type="primary"
          />
        </div>
        <div className={classes['button-section']}>
          <Button type="primary" size="large" onClick={onOpen}>
            Back this project
          </Button>
          <Button type="secondary" size="small">
            <span className={classes['bookmark-icon-mobile']}>
              <BookMarkIcon />
            </span>
            <span className={classes['bookmark-icon-web']}>
              <BookMarkIcon fillColor="#707070" />
            </span>
            <span className={classes['bookmark-title']}>Bookmark</span>
          </Button>
        </div>
      </section>
    </Card>
  );
};

export default BackProjectSection;
