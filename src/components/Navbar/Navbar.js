import React from 'react';
import HeroImageMobile from '../../assets/image-hero-mobile.jpg';
import DesktopImage from '../../assets/image-hero-desktop.jpg';
import Logo from '../../assets/logo.svg';
import MenuIcon from '../../assets/icon-hamburger.svg';
import classes from './Navbar.module.css';
import SingleLink from './SingleLink';

const Navbar = () => {
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
					<img src={MenuIcon} alt="" className={classes['navbar-menu-icon']} />
				</div>
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
