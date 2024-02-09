import React from 'react';
import Carousel from '../Carousel/Carousel';
import flare from '/src/assets/misc/lens-flare-green.png';
import './Hero.css';

export default function Hero({ showSearch }) {
	return (
		<div
			className={`content-container${showSearch ? ' disappear' : ' appear'}`}
		>
			<header
				className='main_header-container'
				data-aos='fade-in'
				data-aos-duration='2000'
				data-aos-once='true'
			>
				<h1 className='main_header-title'>
					Discover the
					<br />
					<span className='main_header-title_sub'>New World</span>
				</h1>
				<img className='main_header-flare' src={flare} alt='lens flare' />
			</header>
			<Carousel showSearch={showSearch} />
			<p
				className='hero-caption'
				data-aos='fade-in'
				data-aos-duration='2000'
				data-aos-delay='2000'
				data-aos-offset='0'
				data-aos-once='true'
			>
				Learn about monster ecology, physiology, and hunting rewards with this
				Monster Hunter World® API tool
			</p>
			<button
				type='button'
				className='nav-button'
				// onClick={handleShowSearch}
				data-aos='fade-in'
				data-aos-duration='2000'
				data-aos-delay='2000'
				data-aos-offset='0'
				data-aos-once='true'
			>
				Explore
			</button>
		</div>
	);
}
