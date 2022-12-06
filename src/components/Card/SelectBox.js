import classNames from 'classnames';
import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import classes from './SelectBox.module.css';
import { useGlobalContext } from '../../store/context';
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
  const [pledgeAmount, setPledgeAmount] = useState(minReward);
  const { updateBackedTotal, closeSelectBoxModal, updateNumberOfBackers } =
    useGlobalContext();
  const changeActiveState = () => {
    setActive(false);
  };
  const ref = useDetectClickOutside({ onTriggered: changeActiveState });
  const focusHandler = () => {
    setActive(true);
  };

  const pledgeAmountChangeHandler = (e) => {
    setPledgeAmount(e.target.value);
  };

  const confirmPledgeHandler = () => {
    updateBackedTotal(pledgeAmount);
    closeSelectBoxModal();
    updateNumberOfBackers();
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
                  maxLength="5"
                  pattern="[0-9]+"
                  value={pledgeAmount}
                  onChange={pledgeAmountChangeHandler}
                />
              </div>

              <div>
                <Button
                  type="primary"
                  size="small"
                  isDisabled={isDisabled}
                  onClick={confirmPledgeHandler}
                >
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
