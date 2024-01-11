import React from 'react';
import anjanath from '../../assets/monsters-min/anjanath.webp';
import './Result.css';

export default function Result({ show }) {
	return (
		<div
			id='component_result-container'
			// className={`${show ? 'fade-appear' : 'fade-disappear'}`}
		>
			<header className='result_monster-name'>
				<h2 className='result_section-heading'>Anjanath</h2>
			</header>
			<section className='result_section-image_description'>
				<img
					src={anjanath}
					alt='Anjanath'
					className='result_section-monster_image'
				/>
				<div className='result_section-monster_description'>
					<p>
						The Anjanath patrols the Ancient Forest, looking for its favorite
						meal, Aptonoth. This belligerent monster will attack anything
						without hesitation.
					</p>
				</div>
			</section>
			<section className='result_section-ailments'>
				<h3 className='result_section-heading'>Ailments</h3>
				<div className='result_section-ailment' id='ailment-1'>
					<p className='result_section-ailment_name'>Fireblight</p>
					<img src='src/assets/icons/fireblight.png' alt='fireblight' />
					<p className='result_section-ailment_description'>
						Fireblight causes damage over time, and negates regular health
						recovery.
					</p>
				</div>
			</section>
			<section className='result_section-resistances_weaknesses'>
				<div className='result_section-resistances'>
					<h3 className='result_section-heading'>Resistances</h3>
					<ul>
						<li>Fire</li>
					</ul>
				</div>
				<div className='result_section-weaknesses'>
					<h3 className='result_section-heading'>Weaknesses</h3>
					<ul>
						<li>Water</li>
						<li>Thunder</li>
						<li>Ice</li>
						<li>Dragon</li>
						<li>Poison</li>
					</ul>
				</div>
			</section>
			<section className='result_section-rewards'>
				<h3 className='result_section-heading'>Rewards</h3>
				<ul>
					<li>Monster Bone L</li>
					<li>Monster Keenbone</li>
					<li>Flame Sac</li>
					<li>Inferno Sac</li>
					<li>Anjanath Scale</li>
					<li>Anjanath Pelt</li>
					<li>Anjanath Fang</li>
					<li>Anjanath Nosebone</li>
					<li>Anjanath Tail</li>
					<li>Anjanath Plate</li>
					<li>Anjanath Scale+</li>
					<li>Anjanath Pelt+</li>
					<li>Anjanath Fang+</li>
					<li>Anjanath Nosebone+</li>
					<li>Anjanath Gem</li>
					<li>Wyvern Tear</li>
				</ul>
			</section>
			<button
				type='button'
				className='navigation-button'
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				Back to Top
			</button>
		</div>
	);
}
