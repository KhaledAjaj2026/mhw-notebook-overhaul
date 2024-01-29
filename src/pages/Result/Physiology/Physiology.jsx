import React from 'react';
import CornerButtons from '../../../components/CornerButtons/CornerButtons';
import iconFire from '../../../assets/icons/fire.png';
import iconIce from '../../../assets/icons/ice.png';
import iconDragon from '../../../assets/icons/dragon.png';
import iconPoison from '../../../assets/icons/poison.png';
import iconWater from '../../../assets/icons/water.png';
import iconThunder from '../../../assets/icons/thunder.png';
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
			<div className='physiology-containers'>
				<div className='physiology-weakness_container'>
					<h4 className='physiology-container_heading'>Weaknesses</h4>
					<ul className='physiology-weakness-list_container'>
						<div className='physiology-list_item'>
							<img
								src={iconThunder}
								alt='thunder'
								className='physiology-list_item-icon'
							/>
							<li>Thunder</li>
						</div>
						<div className='physiology-list_item'>
							<img
								src={iconWater}
								alt='water'
								className='physiology-list_item-icon'
							/>
							<li>Water</li>
						</div>
						<div className='physiology-list_item'>
							<img
								src={iconIce}
								alt='ice'
								className='physiology-list_item-icon'
							/>
							<li>Ice</li>
						</div>
						<div className='physiology-list_item'>
							<img
								src={iconDragon}
								alt='dragon'
								className='physiology-list_item-icon'
							/>
							<li>Dragon</li>
						</div>
						<div className='physiology-list_item'>
							<img
								src={iconPoison}
								alt='poison'
								className='physiology-list_item-icon'
							/>
							<li>Poison</li>
						</div>
					</ul>
				</div>
				<div className='physiology-resistance_container'>
					<h4 className='physiology-container_heading'>Resistances</h4>
					<ul className='physiology-resistance-list_container'>
						<div className='physiology-list_item'>
							<img src={iconFire} alt='fire' className='list_item-icon' />
							<li>Fire</li>
						</div>
					</ul>
				</div>
			</div>
			<CornerButtons />
		</>
	);
}
