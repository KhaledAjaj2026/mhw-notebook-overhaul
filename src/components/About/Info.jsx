import React from 'react';
import './Info.css';

export default function Info() {
	return (
		<div id='information-container'>
			<div className='info-title_container'>
				<h2 className='info_title'>
					Monster Hunter World
					<br />
					Hunters Notes
				</h2>
			</div>
			<nav className='info-navigation_menu'>
				<p className='how_to_use-tab'>How To Use</p>
				<p className='about-tab'>About</p>
				<p className='disclaimer-tab'>Disclaimer</p>
			</nav>
			<div className='info-content-container'>
				{/* <div className='how_to_use-container'></div> */}
				{/* <div className="about-container"></div>
			<div className='info-disclaimer_and_copyright-container'>
				<p className='info_disclaimer'>
					DISCLAIMER: Monster Hunter, Monster Hunter World, and all assets from
					the Monster Hunter franchise and their rights all belong to Capcom.
					This website is a work of fiction, all content is entirely made up by
					the author of this site. The author claims no ownership whatsoever
					over any assets used on this site of which have their rightful
					creators and owners.
				</p>
				<p className='info_copyright'>
					Copyright © 2024 Khaled Ajaj. All rights reserved.
				</p>
			</div> */}
			</div>
		</div>
	);
}
