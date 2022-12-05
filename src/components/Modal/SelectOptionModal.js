import React, { useState } from 'react';
import Modal from './Modal';
import { CloseModalIcon } from '../Button/CloseModalIcon';
import Paragraph from '../Texts/Paragraph';
import classes from './SelectOptionModal.module.css';
import SelectBox from '../Card/SelectBox';

const SelectOptionModal = ({ onClose }) => {
  return (
    <Modal type="select-pledge">
      <section className={classes['select-pledge-main']}>
        <div className={classes['select-pledge-heading']}>
          <h3>Back this project</h3>
          <button className={classes['close-btn']} onClick={onClose}>
            <CloseModalIcon />
          </button>
        </div>

        <div className={classes['para-div']}>
          <Paragraph
            type="primary"
            content="Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? "
          />
        </div>

        <div className={classes['select-box-container']}>
          <div>
            <SelectBox
              pledgeName="Pledge with no reward"
              withReward={false}
              rewardDetails="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
            />
          </div>
          <div>
            <SelectBox
              pledgeName="Bamboo Stand"
              withReward={true}
              minReward={25}
              rewardLeft={105}
              rewardDetails="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
            />
          </div>
          <div>
            <SelectBox
              pledgeName="Black Edition Stand"
              withReward={true}
              minReward={75}
              rewardLeft={64}
              rewardDetails="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
            />
          </div>
          <div>
            <SelectBox
              isDisabled={true}
              pledgeName="Mahogany Special Edition"
              withReward={true}
              minReward={200}
              rewardLeft={0}
              rewardDetails="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list.  Shipping is included."
            />
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default SelectOptionModal;
