import React, { useState, useEffect } from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import arrowLeftInactive from '../../assets/misc/arrow-left-gray.svg';
import arrowRightInactive from '../../assets/misc/arrow-right-gray.svg';
import arrowLeftActive from '../../assets/misc/arrow-left-white.svg';
import arrowRightActive from '../../assets/misc/arrow-right-white.svg';
import menuIcon from '../../assets/misc/hamburger-menu.svg';
import './Navbar.css';

export default function NavBar() {
	const [menuShow, setMenuShow] = new useState(false);
	const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
	const [navTop, setNavTop] = useState(0);

	const handleMenuShow = () => {
		setMenuShow(!menuShow);
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				setNavTop(0);
			} else {
				setNavTop(-108);
			}
			setPrevScrollpos(currentScrollPos);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollpos]);

	return (
		<>
			<nav id='navbar-container' style={{ top: `${navTop}px` }}>
				<div className='navbar_query-arrows'>
					<button onClick={() => alert('left!!')}>
						<img src={arrowLeftInactive} width={50} />
					</button>

					<button onClick={() => alert('right!!')}>
						<img src={arrowRightInactive} width={50} />
					</button>
				</div>
				<Link to='/' className='navbar_title'>
					<h2>
						<span className='navbar_title-short'>MHW</span>
						<span className='navbar_title-long'>Monster Hunter World</span>
						<br />
						Hunters Notes
					</h2>
				</Link>
				<div className='navbar_links'>
					<Link to='/' className='hover-underline-animation'>
						Home
					</Link>
					<Link to='/search' className='hover-underline-animation'>
						Search
					</Link>
					<Link to='/about' className='hover-underline-animation'>
						About
					</Link>
				</div>
				<button className='navbar_hamburger-icon' onClick={handleMenuShow}>
					<img src={menuIcon} alt='hamburger menu' />
				</button>
			</nav>
			<div
				className={`navbar_sliding-menu${
					menuShow ? ' fade-appear' : ' fade-disappear'
				}`}
			>
				<Link to='/'>Home</Link>
				<Link to='/search'>Search</Link>
				<Link to='/about'>About</Link>
			</div>
			<ScrollRestoration />
		</>
	);
}
