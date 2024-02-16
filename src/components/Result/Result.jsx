import React from 'react';
import border from '/src/assets/misc/fancy-border.png';
import topCorner from '/src/assets/misc/corner-design-topleft.png';
import bottomCorner from '/src/assets/misc/corner-design-bottomright.png';
import './Result.css';
const monsterImgLocation = '/src/assets/monsters-min/';

export default function Result({ result }) {
	console.log(result);

	/** Formats monster name retrieved from API into hyphen format used by image files. */
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

	/** Render ailments as JSX elements. */
	const renderAilmentList = () => {
		return result.ailments.map((ailment, i) => {
			const ailmentName = ailment.name.replace(/\s+/g, '');

			return (
				<div className='result_section-ailment' key={'ailment-' + i}>
					<p className='result_section-ailment_name'>{ailment.name}</p>
					<img
						src={`src/assets/icons/${ailmentName}.png`}
						className='result_section-ailment_icon'
						alt={ailment.name}
					/>
					<p className='result_section-ailment_description'>
						{ailment.description}
					</p>
				</div>
			);
		});
	};

	/** Render list-items for monster's elemental weaknesses. */
	const renderWeaknessList = () => {
		if (Object.values(result.weaknesses).length > 0) {
			return Object.values(result.weaknesses).map((weakness, i) => {
				const weaknessName = weakness.element.replace(/\s+/g, '');

				return (
					<div key={i} className='weakness_item-container'>
						<img
							src={`src/assets/icons/${weaknessName}.png`}
							alt={weakness.element}
							className='weakness-element_icon'
						/>
						<li className='weakness-item'>{weakness.element}</li>
					</div>
				);
			});
		} else {
			return (
				<div className='weakness_item-container'>
					<li className='weakness-item'>No Weaknesses</li>
				</div>
			);
		}
	};

	/** Render list-items for monster's elemental resistances. */
	const renderResistanceList = () => {
		if (Object.values(result.resistances).length > 0) {
			return Object.values(result.resistances).map((resistance, i) => {
				const resistanceName = resistance.element.replace(/\s+/g, '');

				return (
					<div className='resistance_item-container'>
						<img
							src={`src/assets/icons/${resistanceName}.png`}
							alt={resistance.element}
							className='resistance-element_icon'
						/>
						<li key={i}>{resistance.element}</li>
					</div>
				);
			});
		} else {
			return (
				<div className='weakness_item-container'>
					<li className='weakness-item'>No Resistances</li>
				</div>
			);
		}
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
					{renderAilmentList()}
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
