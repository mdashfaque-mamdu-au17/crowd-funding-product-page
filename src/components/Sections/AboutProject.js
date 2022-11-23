import React from 'react';
import Title from '../Texts/Title';
import Card from '../Card/Card';
import classes from './AboutProject.module.css';
import Paragraph from '../Texts/Paragraph';
import SinglePledge from './SinglePledge';

const AboutProject = () => {
  return (
    <Card primary={true}>
      <section className={classes['about-project-section']}>
        <div>
          <Title primary={true} size="small">
            About this project
          </Title>
        </div>
        <div>
          <div className={classes['para-first']}>
            <Paragraph
              type="secondary"
              content="The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."
            />
          </div>
          <div className={classes['para-second']}>
            <Paragraph
              type="secondary"
              content="Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."
            />
          </div>
        </div>

        <div className={classes['pledges-section']}>
          <SinglePledge
            pledgeName="Bamboo Stand"
            pledgeAmount={25}
            pledgeDetails="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
            pledgeLeft={101}
          />

          <SinglePledge
            pledgeName="Black Edition Stand"
            pledgeAmount={75}
            pledgeDetails="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
            pledgeLeft={64}
          />

          <SinglePledge
            pledgeName="Mahogany Special Edition"
            pledgeAmount={200}
            pledgeDetails="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included. "
            pledgeLeft={0}
            isDisabled={true}
          />
        </div>
      </section>
    </Card>
  );
};

export default AboutProject;
