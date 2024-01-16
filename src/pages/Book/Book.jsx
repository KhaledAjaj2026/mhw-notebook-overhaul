import React, { useEffect } from 'react';
import './Book.css';

export default function Book() {
	useEffect(() => {
		window.onload = console.log('jsaflkdsaj');
	});
	return (
		<>
			<div id='background'></div>
			<div id='book-container'>
				<div className='book-leather_cover'>
					<header>
						<h1 className='cover-header_title'>
							Monster Hunter World
							<br />
							<span className='cover-header_title-subheader'>
								Hunter's Notes
							</span>
						</h1>
					</header>
					<div className='cover-description'>
						<p>A guide to monster ecology, physiology, and rewards</p>
					</div>
					<a href='/' className='navigation-button'>
						Search Now
					</a>
				</div>
			</div>
		</>
	);
}
