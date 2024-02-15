import React from 'react';
import border from '/src/assets/misc/fancy-border.png';
import topCorner from '/src/assets/misc/corner-design-topleft.png';
import bottomCorner from '/src/assets/misc/corner-design-bottomright.png';
import './Result.css';
const monsterImgLocation = '/src/assets/monsters-min/';

export default function Result({ result }) {
	console.log(result);
	/** Translates monster name retrieved from API into hyphen format used by asset files. */
	const monsterName = () => {
		let name = [];
		for (let i = 0; i < result.name.length; i++) {
			if (result.name[i] === ' ') {
				name.push('-');
			} else {
				name.push(result.name[i].toLowerCase());
			}
		}
		return name.join('');
	};

	/** Render list-items for monster's elemental weaknesses. */
	const renderWeaknessList = () => {
		return Object.values(result.weaknesses).map((weakness, i) => {
			return <li key={i}>{weakness.element}</li>;
		});
	};

	/** Render list-items for monster's elemental resistances. */
	const renderResistanceList = () => {
		return Object.values(result.resistances).map((resistance, i) => {
			return <li key={i}>{resistance.element}</li>;
		});
	};

	/** Render list-items for reach reward. Render default list if no data for rewards. */
	const renderRewardList = () => {
		if (result.rewards.length > 0) {
			return result.rewards.map((reward, i) => {
				return <li key={i}>{reward.item.name}</li>;
			});
		} else {
			return (
				<>
					<li>Monster Bone L</li>
					<li>Monster Keenbone</li>
					<li>Flame Sac</li>
					<li>Inferno Sac</li>
					<li>{result.name} Scale</li>
					<li>{result.name} Pelt</li>
					<li>{result.name} Fang</li>
					<li>{result.name} Tail</li>
					<li>{result.name} Plate</li>
					<li>{result.name} Scale+</li>
					<li>{result.name} Pelt+</li>
					<li>{result.name} Fang+</li>
					<li>{result.name} Gem</li>
					<li>Wyvern Tear</li>
				</>
			);
		}
	};

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
				className={`${result.name === '' ? 'hide' : 'show'}`}
			>
				<header className='result_monster-name'>
					<div className='result_section-heading_container'>
						<img
							src={topCorner}
							className='decorative-corner-header'
							alt='decorative corner'
						/>
						<h2 className='result_section-heading monster-name'>
							{result.name}
						</h2>
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
							src={monsterImgLocation + monsterName() + '.webp'}
							alt={result.name}
							className='result_section-monster_image'
						/>
					</div>
					<div className='result_section-monster_description'>
						<div className='monster_attribute'>
							<h4>Species: </h4>
							<p>{result.species}</p>
						</div>
						<div className='monster_attribute'>
							<h4>Habitat: </h4>
							<p>{result.location}</p>
						</div>
						<div className='monster_attribute'>
							<h4>Description: </h4>
						</div>
						<p className='monster-main_description'>{result.description}</p>
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
							<p className='result_section-ailment_name'>
								{result.ailments?.name}
							</p>
							<img
								src='src/assets/icons/fireblight.png'
								className='result_section-ailment_icon'
								alt='fireblight'
							/>
						</div>
						<p className='result_section-ailment_description'>
							{result.ailments?.description}
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
						{/* render JSX in outer function upon result update. */}
						<ul>{renderResistanceList()}</ul>
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
						{/* render JSX in outer function upon result update. */}
						{/* <ul>
							<li>Water</li>
							<li>Thunder</li>
							<li>Ice</li>
							<li>Dragon</li>
							<li>Poison</li>
						</ul> */}
						<ul>{renderWeaknessList()}</ul>
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
					<ul>{renderRewardList()}</ul>
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
