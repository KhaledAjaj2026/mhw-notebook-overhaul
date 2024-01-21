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
	undoTurnAndSeek,
	turnResult,
	incrementTurnResult
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
			<div className='description_stats-container'>
				<div className='description_stats-subcontainer'>
					<h4>Species:</h4>
					<p>Brute Wyvern</p>
				</div>
				<div className='description_stats-subcontainer'>
					<h4>Location:</h4>
					<p>Ancient Forest</p>
				</div>
			</div>
			<p className='description-monster_description'>
				The Anjanath patrols the Ancient Forest, looking for its favorite meal,
				Aptonoth. This belligerent monster will attack anything without
				hesitation.
			</p>
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
