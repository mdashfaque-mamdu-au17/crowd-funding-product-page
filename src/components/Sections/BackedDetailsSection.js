import classNames from 'classnames';
import React from 'react';
import Card from '../Card/Card';
import Paragraph from '../Texts/Paragraph';
import Title from '../Texts/Title';
import classes from './BackedDetailsSection.module.css';

const BackedDetailsSection = () => {
  let barFillWidth = '0%';
  barFillWidth = Math.round((89194 / 100000) * 100) + '%';
  return (
    <Card primary={true}>
      <section className={classes['backed-details-section']}>
        <div className={classes['backed-details-container']}>
          <div className={classNames(classes['backed-single-info'])}>
            <div>
              <Title>$89,194</Title>
            </div>
            <div className={classes.paragraph}>
              <Paragraph type="primary" content="of $100,000 backed" />
            </div>
            <div className={classes.underline}></div>
          </div>

          <div
            className={classNames(
              classes['backed-single-info'],
              classes['backers-info']
            )}
          >
            <div>
              <Title>5,007</Title>
            </div>
            <div className={classes.paragraph}>
              <Paragraph type="primary" content="total backers" />
            </div>
            <div className={classes.underline}></div>
          </div>

          <div className={classes['backers-info']}>
            <div>
              <Title>56</Title>
            </div>
            <div>
              <Paragraph type="primary" content="day left" />
            </div>
          </div>
        </div>

        <div className={classes['fill-bar']}>
          <div className={classes['outer-fill']}>
            <div
              style={{ width: barFillWidth }}
              className={classes['inner-fill']}
            ></div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default BackedDetailsSection;
