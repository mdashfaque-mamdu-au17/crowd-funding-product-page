import classNames from 'classnames';
import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import classes from './SelectBox.module.css';
const SelectBox = (props) => {
  const {
    withReward,
    rewardDetails,
    minReward,
    rewardLeft,
    pledgeName,
    isDisabled,
  } = props;
  const [active, setActive] = useState(false);
  const changeActiveState = () => {
    setActive(false);
  };
  const ref = useDetectClickOutside({ onTriggered: changeActiveState });
  const focusHandler = () => {
    setActive(true);
  };

  return (
    <div
      ref={ref}
      className={classNames(
        classes.card,
        active && !isDisabled && classes['card-active'],
        isDisabled && classes['card-disabled']
      )}
      onFocus={focusHandler}
      tabIndex="-1"
    >
      <div className={classes['pledge-details']}>
        <label htmlFor="" className={classes.label}>
          <input type="radio" readOnly checked={active && !isDisabled} />
          <div className={classes['label-info']}>
            <h4>{pledgeName}</h4>
            {withReward && <p>Pledge ${minReward} or more</p>}
          </div>
        </label>

        <div className={classes['amount-left-web']}>
          {withReward && (
            <p>
              {rewardLeft} <span>left</span>
            </p>
          )}
        </div>
      </div>

      <div className={classes['para-container']}>
        <Paragraph type="primary" content={rewardDetails} />
      </div>

      <div className={classes['amount-left-section']}>
        <p>
          {rewardLeft} <span>left</span>
        </p>
      </div>

      {active && withReward && (
        <div className={classNames(classes['amount-input-section'])}>
          <div className={classes['amount-input-section-container']}>
            <div className={classes['amount-section-pledge-label']}>
              <Paragraph type="primary" content="Enter your pledge" />
            </div>
            <div className={classes['amount-actions-container']}>
              <div className={classes['amount-input']}>
                <span>$</span>
                <span className={classes['input-right-border']}></span>
                <input
                  type="text"
                  id="price"
                  placeholder={minReward}
                  className={classes['input']}
                  maxLength="3"
                  pattern="[0-9]+"
                />
              </div>

              <div>
                <Button type="primary" size="small" isDisabled={isDisabled}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
