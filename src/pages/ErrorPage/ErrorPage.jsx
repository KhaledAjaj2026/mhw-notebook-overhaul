import React from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import flare from '../../assets/misc/lens-flare-green.png';
import './ErrorPage.css';
import Footer from '../../components/Footer/Footer';

function ErrorPage() {
	return (
		<div id='page_error-container'>
			<NavBar />
			<header className='main-header_container'>
				<h1 className='main-header_title'>Oops!</h1>
			</header>
			<div className='main-description'>
				<p>Sorry! This page does not exist.</p>
			</div>
			<Link to='/' className='navigation-button'>
				Back to Home
			</Link>
			<Footer />
			<ScrollRestoration />
		</div>
	);
}

export default ErrorPage;
