import React, { useState } from 'react';
import './Book.css';
import Leaf from '../components/Leaf/Leaf';
import SearchPage from '../pages/SearchPage/SearchPage';
import TableOfContents from '../pages/TableOfContents/TableOfContents';

export default function Book() {
	const [open, setOpen] = new useState(false);
	const handleOpen = () => setOpen(true);

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
			<div
				className={`book-leather_cover-back${open ? ' flip-open' : ' hidden'}`}
			></div>
			<Leaf open={open} content={TableOfContents} id={'toc-page_container'} />
			<Leaf open={open} content={SearchPage} id={'search-page_container'} />
		</div>
	);
}
