import React from 'react';
import Card from '../Card/Card';
import Title from '../Texts/Title';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import classes from './SinglePledge.module.css';
import classNames from 'classnames';

const SinglePledge = ({
  pledgeName,
  pledgeAmount,
  pledgeDetails,
  pledgeLeft,
  isDisabled,
}) => {
  return (
    <Card primary={false}>
      <section
        className={classNames(
          classes['single-pledge'],
          isDisabled && classes['single-pledge-disable']
        )}
      >
        <div className={classes['single-pledge-details']}>
          <Title secondary={true}>{pledgeName}</Title>
          <Paragraph content={pledgeAmount} type="primaryAmount" />
        </div>
        <div className={classes['para']}>
          <Paragraph type="secondary" content={pledgeDetails} />
        </div>
        <div className={classes['pledge-actions']}>
          <div className={classes['pledge-left']}>
            <Title>{pledgeLeft}</Title>
            <Paragraph type="primary" content="left" />
          </div>
          <div>
            <Button type="primary" size="medium" isDisabled={isDisabled}>
              Select Reward
            </Button>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default SinglePledge;
