import classNames from 'classnames';
import React, { useState } from 'react';
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
          shit
        </label>
      </div>
    </div>
  );
};

export default SelectBox;
