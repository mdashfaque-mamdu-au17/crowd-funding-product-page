import React from 'react';
import Modal from './Modal';
import ThankYouIcon from '../../assets/icon-check.svg';
import classes from './ThankYou.module.css';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import { useGlobalContext } from '../../store/context';
const ThankYou = () => {
  const { closeThankYouModal } = useGlobalContext();
  return (
    <Modal type="welcome-modal">
      <div className={classes['welcome-container']}>
        <div className={classes['check-icon-container']}>
          <img src={ThankYouIcon} alt="" />
        </div>
        <div className={classes['thank-you-support']}>
          <h3>Thanks for your support!</h3>
        </div>
        <div className={classes['thank-you-para']}>
          <Paragraph
            type="primary"
            content="Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."
          />
        </div>

        <div className={classes['btn-container']}>
          <Button type="primary" size="small" onClick={closeThankYouModal}>
            Got it!
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ThankYou;
