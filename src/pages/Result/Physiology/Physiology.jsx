import React from 'react';
import rightCorner from '/src/assets/misc/gold_corner-bottom_right.png';
import leftCorner from '/src/assets/misc/gold_corner-bottom_left.png';
import './Physiology.css';

export default function Physiology(
	handleTurnPage,
	handleSeekMonster,
	handleFlip,
	turnAndSeek,
	undoTurnAndSeek,
	turnResult,
	incrementTurnResult
) {
	return (
		<>
			<h2 className='physiology-leaf_title'>Physiology</h2>
			<button
				type='button'
				className='result-turn_leaf-button result-turn_leaf-button-right'
			>
				<img
					src={rightCorner}
					alt='decorative corner'
					onClick={incrementTurnResult}
				/>
			</button>
			<button
				type='button'
				className='result-turn_leaf-button result-turn_leaf-button-left'
				onClick={undoTurnAndSeek}
			>
				<img src={leftCorner} alt='decorative corner' />
			</button>
		</>
	);
}
