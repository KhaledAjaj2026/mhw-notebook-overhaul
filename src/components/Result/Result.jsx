import React from 'react';
import anjanath from '../../assets/monsters-min/anjanath.webp';
import border from '../../assets/misc/fancy-border.png';
import topCorner from '../../assets/misc/corner-design-topleft.png';
import bottomCorner from '../../assets/misc/corner-design-bottomright.png';
import './Result.css';

export default function Result({ result }) {
	return (
		<>
			{/* {result ? (
				<div className='loading_screen-result'>
					<div className='loading_screen-animation'>
						<div className='loading-animation'></div>
						<p>Loading...</p>
					</div>
				</div>
			) : (
				''
			)} */}
			<div
				id='component_result-container'
				className={`${result ? 'show' : 'hide'}`}
			>
				<header className='result_monster-name'>
					<div className='result_section-heading_container'>
						<img
							src={topCorner}
							className='decorative-corner-header'
							alt='decorative corner'
						/>
						<h2 className='result_section-heading monster-name'>Anjanath</h2>
						<img
							src={bottomCorner}
							className='decorative-corner-header decorative-corner_bottom-header'
							alt='decorative corner'
						/>
					</div>
				</header>
				<section className='result_section-image__description'>
					<div className='result_section-monster_image-container'>
						<img src={border} className='result_section-image_border' alt='' />
						<img
							src={anjanath}
							alt='Anjanath'
							className='result_section-monster_image'
						/>
					</div>
					<div className='result_section-monster_description'>
						<div className='monster_attribute'>
							<h4>Species: </h4>
							<p>Brute Wyvern</p>
						</div>
						<div className='monster_attribute'>
							<h4>Habitat: </h4>
							<p>Ancient Forest</p>
						</div>
						<div className='monster_attribute'>
							<h4>Description: </h4>
						</div>
						<p className='monster-main_description'>
							The Anjanath patrols the Ancient Forest, looking for its favorite
							meal, Aptonoth. This belligerent monster will attack anything
							without hesitation.
						</p>
					</div>
				</section>
				<section className='result_section-ailments'>
					<div className='result_section-heading_container'>
						<img
							src={topCorner}
							className='decorative-corner'
							alt='decorative corner'
						/>
						<h3 className='result_section-heading section_subheading'>
							Ailments
						</h3>
						<img
							src={bottomCorner}
							className='decorative-corner decorative-corner_bottom'
							alt='decorative corner'
						/>
					</div>
					<div className='result_section-ailment' id='ailment-1'>
						<div className='result_section-ailment_name__icon'>
							<p className='result_section-ailment_name'>Fireblight</p>
							<img
								src='src/assets/icons/fireblight.png'
								className='result_section-ailment_icon'
								alt='fireblight'
							/>
						</div>
						<p className='result_section-ailment_description'>
							Fireblight causes damage over time, and negates regular health
							recovery.
						</p>
					</div>
				</section>
				<section className='result_section-resistances__weaknesses'>
					<div className='result_section-resistances'>
						<div className='result_section-heading_container section_subheading-resistance'>
							<img
								src={topCorner}
								className='decorative-corner'
								alt='decorative corner'
							/>
							<h3 className='result_section-heading section_subheading'>
								Resistances
							</h3>
							<img
								src={bottomCorner}
								className='decorative-corner decorative-corner_bottom'
								alt='decorative corner'
							/>
						</div>
						<ul>
							<li>Fire</li>
						</ul>
					</div>
					<div className='result_section-weaknesses'>
						<div className='result_section-heading_container section_subheading-weakness'>
							<img
								src={topCorner}
								className='decorative-corner'
								alt='decorative corner'
							/>
							<h3 className='result_section-heading section_subheading'>
								Weaknesses
							</h3>
							<img
								src={bottomCorner}
								className='decorative-corner decorative-corner_bottom'
								alt='decorative corner'
							/>
						</div>
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
					<div className='result_section-heading_container'>
						<img
							src={topCorner}
							className='decorative-corner'
							alt='decorative corner'
						/>
						<h3 className='result_section-heading section_subheading'>
							Rewards
						</h3>
						<img
							src={bottomCorner}
							className='decorative-corner decorative-corner_bottom'
							alt='decorative corner'
						/>
					</div>
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
					className='nav-button'
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					Back to Top
				</button>
			</div>
		</>
	);
}
