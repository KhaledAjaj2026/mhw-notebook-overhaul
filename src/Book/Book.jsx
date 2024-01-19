import React, { useState } from 'react';
import './Book.css';
import Leaf from '../components/Leaf/Leaf';
import SearchPage from '../pages/SearchPage/SearchPage';
import TableOfContents from '../pages/TableOfContents/TableOfContents';
import Result from '../pages/Result/Result';

export default function Book() {
	const [open, setOpen] = new useState(false);
	const [flip, setFlip] = new useState(false);

	const handleOpen = () => setOpen(true);

	const handleFlipTrue = () => setFlip(true);
	const handleFlipFalse = () => setFlip(false);

	return (
		<div className='book-container'>
			<div id='background'></div>
			<div
				className={`book-leather_cover slide-up${open ? ' flip-cover' : ''}`}
			>
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
				className={`book-leather_cover-back${
					open ? ' flip-cover_back' : ' hidden'
				}`}
			></div>
			<Leaf
				open={open}
				content={Result}
				id={'result-page_container'}
				flip={flip}
				handler={handleFlipTrue}
			/>
			{/* <Leaf
				open={open}
				content={TableOfContents}
				id={'toc-page_container'}
				handler={handleFlipFalse}
			/>
			<Leaf
				open={open}
				content={SearchPage}
				id={'search-page_container'}
				flip={flip}
				handler={handleFlipTrue}
			/> */}
		</div>
	);
}
