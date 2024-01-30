import React from 'react';
import rightCorner from '../../assets/misc/gold_corner-bottom_right.png';
import leftCorner from '../../assets/misc/gold_corner-bottom_left.png';
import './CornerButtons.css';

export default function CornerButtons({
	handleSeekMonster,
	undoTurnAndSeek,
	turnResult,
	incrementTurnResult,
	decrementTurnResult,
}) {
	return (
		<>
			<button type='button' className='corner_button corner_button-right'>
				<img
					src={rightCorner}
					alt='decorative corner'
					onClick={incrementTurnResult}
				/>
			</button>
			<button
				type='button'
				className='corner_button corner_button-left'
				onClick={undoTurnAndSeek}
			>
				<img src={leftCorner} alt='decorative corner' />
			</button>
		</>
	);
}
