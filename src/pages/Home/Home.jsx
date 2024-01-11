import React from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import flare from '../../assets/misc/lens-flare-green.png';
import './Home.css';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

export default function Home() {
	return (
		<div id='page_home-container'>
			<NavBar />
			<header className='main-header_container'>
				<h1 className='main-header_title'>Discover Monsters</h1>
				<img className='main-header_flare' src={flare} alt='lens flare' />
			</header>
			<Carousel />
			<div className='main-description'>
				<p>
					Learn about monster ecology, hunting techniques, quest rewards, and
					more
				</p>
			</div>
			<Link to='/search' className='navigation-button'>
				Search Now
			</Link>
			<Footer />
			<ScrollRestoration />
		</div>
	);
}
