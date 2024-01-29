import React from 'react';
import CornerButtons from '../../../components/CornerButtons/CornerButtons';
import './Rewards.css';
import '../../../pages/TableOfContents/TableOfContents.css';

export default function Rewards(props) {
	return (
		<>
			<h2 className='rewards-leaf_title'>Rewards</h2>
			<div className='rewards-list'>
				<ul>
					<li>Monster Bone L</li>
					<li>Monster Keenbone</li>
					<li>Monster Hardbone</li>
					<li>Monster Bone S</li>
					<li>Monster Toughbone</li>
					<li>Monster Bone M</li>
					<li>Iron Ore</li>
					<li>Wyvern Tear</li>
				</ul>
			</div>
			<CornerButtons />
		</>
	);
}
