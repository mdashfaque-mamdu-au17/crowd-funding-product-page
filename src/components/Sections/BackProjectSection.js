import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Title from '../Texts/Title';
import classes from './BackProjectSection.module.css';
import MasterCraftLogo from '../../assets/logo-mastercraft.svg';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import BookMarkIcon from '../Button/BookMarkIcon';
import { useGlobalContext } from '../../store/context';
import classNames from 'classnames';

const BackProjectSection = () => {
  const [isBookMarked, setIsBookMarked] = useState(
    localStorage.getItem('bookmarked') || false
  );
  const { openSelectBoxModal } = useGlobalContext();

  const bookMarkHandler = () => {
    setIsBookMarked(!isBookMarked);
  };

  useEffect(() => {
    localStorage.setItem('bookmarked', isBookMarked);
  }, [isBookMarked]);
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
          <Button type="primary" size="large" onClick={openSelectBoxModal}>
            Back this project
          </Button>
          <Button type="secondary" size="small" onClick={bookMarkHandler}>
            <span className={classes['bookmark-icon-mobile']}>
              <BookMarkIcon
                fillColor={isBookMarked ? '#147A73' : '#707070'}
                pathFill={isBookMarked ? '#ffffff' : '#B1B1B1'}
              />
            </span>
            <span className={classes['bookmark-icon-web']}>
              <BookMarkIcon
                fillColor={isBookMarked ? '#147A73' : '#707070'}
                pathFill={isBookMarked ? '#ffffff' : '#B1B1B1'}
              />
            </span>
            <span
              className={classNames(
                classes['bookmark-title'],
                isBookMarked && classes['bookmark-title-active']
              )}
            >
              Bookmark
            </span>
          </Button>
        </div>
      </section>
    </Card>
  );
};

export default BackProjectSection;
