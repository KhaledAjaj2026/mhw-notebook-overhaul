import React from 'react';
import anjanath from '/src/assets/monsters-min/anjanath.webp';
import rajang from '/src/assets/monsters-min/rajang.webp';
import CornerButtons from '../../../components/CornerButtons/CornerButtons';
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
			<CornerButtons />
		</>
	);
}
