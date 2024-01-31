import React, { useState } from 'react';
import './Book.css';
import Leaf from '../components/Leaf/Leaf';
import SearchPage from '../pages/SearchPage/SearchPage';
import TableOfContents from '../pages/TableOfContents/TableOfContents';
import FlipToPage from '../components/FlipToPage/FlipToPage';
import Description from '../pages/Result/Description/Description';
import Physiology from '../pages/Result/Physiology/Physiology';
import Rewards from '../pages/Result/Rewards/Rewards';

export default function Book() {
	const [open, setOpen] = new useState(false);
	const [turnPage, setTurnPage] = new useState(false);
	const [seekMonster, setSeekMonster] = new useState(false);
	const [flip, setFlip] = new useState(false);
	const [turnResult, setTurnResult] = new useState(0);

	const handleOpen = () => setOpen(true);
	const handleTurnPage = () => setTurnPage(!turnPage);
	const handleSeekMonster = () => setSeekMonster(!seekMonster);
	const handleFlip = () => setFlip(!flip);

	const incrementTurnResult = () => {
		turnResult < 3 ? setTurnResult(turnResult + 1) : '';
	};
	const decrementTurnResult = () => {
		turnResult > 0 ? setTurnResult(turnResult - 1) : '';
	};

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
				content={Rewards}
				id={'rewards-page_container'}
				index={2}
				turnResult={turnResult}
				incrementTurnResult={incrementTurnResult}
				decrementTurnResult={decrementTurnResult}
			/>
			<Leaf
				open={open}
				content={Physiology}
				id={'physiology-page_container'}
				index={1}
				turnResult={turnResult}
				incrementTurnResult={incrementTurnResult}
				decrementTurnResult={decrementTurnResult}
			/>
			<Leaf
				open={open}
				content={Description}
				id={'description-page_container'}
				index={0}
				handleFlip={handleFlip}
				turnResult={turnResult}
				handleSeekMonster={handleSeekMonster}
				incrementTurnResult={incrementTurnResult}
				decrementTurnResult={decrementTurnResult}
			/>
			<FlipToPage flip={flip} />
			<Leaf
				open={open}
				content={TableOfContents}
				id={'toc-page_container'}
				handleTurnPage={handleTurnPage}
				seekMonster={seekMonster}
				handleSeekMonster={handleSeekMonster}
				handleFlip={handleFlip}
			/>
			<Leaf
				open={open}
				content={SearchPage}
				id={'search-page_container'}
				handleTurnPage={handleTurnPage}
				seekMonster={seekMonster}
				handleSeekMonster={handleSeekMonster}
				handleFlip={handleFlip}
				turnPage={turnPage}
			/>
		</div>
	);
}
