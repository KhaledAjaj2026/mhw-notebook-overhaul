import React, { useEffect } from 'react';
import anjanath from '../../assets/monsters-min/anjanath.webp';
// import border from '../../assets/misc/fancy-border.png';
import rightCorner from '../../assets/misc/gold_corner-bottom_right.png';
import leftCorner from '../../assets/misc/gold_corner-bottom_left.png';
import './Result.css';

export default function Result(
	handleTurnPage,
	handleSeekMonster,
	handleFlip,
	turnAndSeek,
	undoTurnAndSeek
) {
	return (
		<>
			<h2 className='result-leaf_title'>Anjanath</h2>
			<button type='button' className='result-turn_leaf-button-right'>
				<img src={rightCorner} alt='decorative corner' />
			</button>
			<button
				type='button'
				className='result-turn_leaf-button-left'
				onClick={undoTurnAndSeek}
			>
				<img src={leftCorner} alt='decorative corner' />
			</button>
		</>
	);
}
