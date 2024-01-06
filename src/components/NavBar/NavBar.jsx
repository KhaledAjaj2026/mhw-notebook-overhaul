import { useState } from 'react';
import arrowLeftInactive from '../../assets/misc/arrow-left-gray.svg';
import arrowRightInactive from '../../assets/misc/arrow-right-gray.svg';
import arrowLeftActive from '../../assets/misc/arrow-left-white.svg';
import arrowRightActive from '../../assets/misc/arrow-right-white.svg';
import menuIcon from '../../assets/misc/hamburger-menu.svg';
import './Navbar.css';

export default function NavBar() {
	const [menuShow, setMenuShow] = new useState(false);

	const handleMenuShow = () => {
		setMenuShow(!menuShow);
	};

	return (
		<>
			<nav>
				<div className='navbar_query-arrows'>
					<button onClick={() => alert('left!!')}>
						<img src={arrowLeftInactive} width={50} />
					</button>

					<button onClick={() => alert('right!!')}>
						<img src={arrowRightInactive} width={50} />
					</button>
				</div>
				<a href='/' className='navbar_title'>
					<h2>
						<span className='navbar_title-short'>MHW</span>
						<span className='navbar_title-long'>Monster Hunter World</span>
						<br />
						Hunters Notes
					</h2>
				</a>
				<div className='navbar_links'>
					<a href='/'>Home</a>
					<a href='/'>Search</a>
					<a href='/'>About</a>
				</div>
				<button className='navbar_mobile-menu' onClick={handleMenuShow}>
					<img src={menuIcon} alt='hamburger menu' />
				</button>
			</nav>
			<div
				className='navbar_sliding-menu'
				style={menuShow ? { display: 'flex' } : { display: 'none' }}
			>
				<a href='/'>Home</a>
				<a href='/shop'>Shop</a>
				<a href='/about'>About</a>
			</div>
		</>
	);
}
