import React, { useEffect, useState } from 'react';
import './Book.css';

export default function Book() {
	const [open, setOpen] = new useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};
	// useEffect(() => {
	// 	window.onload = console.log('jsaflkdsaj');
	// });
	return (
		<div className='book-container'>
			<div id='background'></div>
			<div className={`book-leather_cover slide-up${open ? ' flip-open' : ''}`}>
				<header>
					<h1 className='cover-header_title'>
						Monster Hunter World
						<br />
						<span className='cover-header_title-subheader'>Hunter's Notes</span>
					</h1>
				</header>
				<div className='cover-description'>
					<p>A guide to monster ecology, physiology, and rewards</p>
				</div>
				<button className='navigation-button' onClick={handleOpen}>
					Search Now
				</button>
			</div>
		</div>
	);
}
