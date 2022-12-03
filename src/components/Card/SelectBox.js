import classNames from 'classnames';
import React, { useState } from 'react';
import Paragraph from '../Texts/Paragraph';
import classes from './SelectBox.module.css';
const SelectBox = () => {
  const [active, setActive] = useState(false);
  const focusHandler = () => {
    setActive(true);
  };

  const handlerBlur = () => {
    setActive(false);
  };

  return (
    <div
      className={classNames(classes.card, active && classes['card-active'])}
      onFocus={focusHandler}
      onBlur={handlerBlur}
      tabIndex="-1"
    >
      <div>
        <label htmlFor="" className={classes.label}>
          <input type="radio" readOnly checked={active} />
          <div className={classes['label-info']}>
            <h4>Pledge with no reward</h4>
            <p>Pledge $25 or more</p>
          </div>
        </label>
      </div>

      <div className={classes['para-container']}>
        <Paragraph
          type="primary"
          content="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
        />
      </div>
    </div>
  );
};

export default SelectBox;
