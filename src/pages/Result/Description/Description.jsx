import React from 'react';
import anjanath from '/src/assets/monsters-min/anjanath.webp';
import rajang from '/src/assets/monsters-min/rajang.webp';
import rightCorner from '/src/assets/misc/gold_corner-bottom_right.png';
import leftCorner from '/src/assets/misc/gold_corner-bottom_left.png';
import './Description.css';

export default function Description(
	handleTurnPage,
	handleSeekMonster,
	handleFlip,
	turnAndSeek,
	undoTurnAndSeek
) {
	const monster = 'anjanath';

	return (
		<>
			<h2 className='description-leaf_title'>Anjanath</h2>
			<div className='description-image_container'>
				<img
					src={anjanath}
					className='description-monster_image'
					alt={`image of ${monster}`}
				/>
			</div>
			<p className='description-monster_description'>
				The Anjanath patrols the Ancient Forest, looking for its favorite meal,
				Aptonoth. This belligerent monster will attack anything without
				hesitation.
			</p>
			<button
				type='button'
				className='description-turn_leaf-button turn_leaf-button-right'
			>
				<img src={rightCorner} alt='decorative corner' />
			</button>
			<button
				type='button'
				className='description-turn_leaf-button turn_leaf-button-left'
				onClick={undoTurnAndSeek}
			>
				<img src={leftCorner} alt='decorative corner' />
			</button>
		</>
	);
}
