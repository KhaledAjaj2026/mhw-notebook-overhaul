import React, { useState } from 'react';
import './Book.css';
import Leaf from '../components/Leaf/Leaf';
import SearchPage from '../pages/SearchPage/SearchPage';
import TableOfContents from '../pages/TableOfContents/TableOfContents';
import Result from '../pages/Result/Result';
import FlipToPage from '../components/FlipToPage/FlipToPage';

export default function Book() {
	const [open, setOpen] = new useState(false);
	const [turnPage, setTurnPage] = new useState(false);
	const [seekMonster, setSeekMonster] = new useState(false);
	const [flip, setFlip] = new useState(false);

	const handleOpen = () => setOpen(true);
	const handleTurnPage = () => setTurnPage(!turnPage);
	const handleSeekMonster = () => setSeekMonster(!seekMonster);
	const handleFlip = () => setFlip(!flip);

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
			{/* <Leaf
				open={open}
				content={Result}
				id={'result-page_container'}
				handleTurnPage={handleTurnPage}
			/> */}
			<FlipToPage flip={flip} />
			{/* <Leaf
				open={open}
				content={TableOfContents}
				id={'toc-page_container'}
				handleTurnPage={handleTurnPage}
				handleFlip={handleFlip}
			/>
			<Leaf
				open={open}
				content={SearchPage}
				id={'search-page_container'}
				turnPage={turnPage}
				handleTurnPage={handleTurnPage}
				seekMonster={seekMonster}
				handleSeekMonster={handleSeekMonster}
			/> */}
		</div>
	);
}
