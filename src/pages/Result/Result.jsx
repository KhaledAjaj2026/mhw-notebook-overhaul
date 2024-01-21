import React from 'react';
import anjanath from '../../assets/monsters-min/anjanath.webp';
import rajang from '../../assets/monsters-min/rajang.webp';
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
	const monster = 'anjanath';

	return (
		<>
			<h2 className='result-leaf_title'>Anjanath</h2>
			<div className='result-image_container'>
				{/* <img src={border} alt='fancy border' className='result-image_border' /> */}
				<img
					src={anjanath}
					className='result-monster_image'
					alt={`image of ${monster}`}
				/>
			</div>
			<p className='result-monster_description'>
				The Anjanath patrols the Ancient Forest, looking for its favorite meal,
				Aptonoth. This belligerent monster will attack anything without
				hesitation.
			</p>
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
