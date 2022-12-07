import React, { useState } from 'react';
import HeroImageMobile from '../../assets/image-hero-mobile.jpg';
import DesktopImage from '../../assets/image-hero-desktop.jpg';
import Logo from '../../assets/logo.svg';
import MenuIcon from '../../assets/icon-hamburger.svg';
import CloseIcon from '../../assets/icon-close-menu.svg';
import classes from './Navbar.module.css';
import SingleLink from './SingleLink';
import MenuModal from '../Modal/MenuModal';
import { disableScroll, enableScroll } from '../../utils/utils';
import classNames from 'classnames';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    enableScroll();
  };

  const openMenu = () => {
    setMenuOpen(true);
    disableScroll();
  };
  return (
    <header className={classes.header}>
      <div className={classes['mobile-image']}>
        <img src={HeroImageMobile} alt="" />
      </div>
      <div className={classes['desktop-image']}>
        <img src={DesktopImage} alt="" />
      </div>
      <nav className={classes.navbar}>
        <div>
          <img src={Logo} alt="" className={classes['navbar-logo']} />
        </div>
        <div className={classes['menu-icon-container']}>
          {menuOpen ? (
            <img src={CloseIcon} alt="" onClick={closeMenu} />
          ) : (
            <img
              src={MenuIcon}
              alt=""
              className={classes['navbar-menu-icon']}
              onClick={openMenu}
            />
          )}
        </div>

        {menuOpen && <div className={classes.backdrop}></div>}
        {menuOpen && (
          <div className={classNames(classes['mobile-menu'])}>
            <MenuModal />
          </div>
        )}

        <div className={classes['navbar-items']}>
          <SingleLink title="About" />
          <SingleLink title="Discover" />
          <SingleLink title="Get Started" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
