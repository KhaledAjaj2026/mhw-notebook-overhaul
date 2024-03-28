import React from 'react';
import './Info.css';

export default function Info() {
	return (
		<div id='information-container'>
			<div className='footer-title_container'>
				<h2 className='footer_title'>
					Monster Hunter World
					<br />
					Hunters Notes
				</h2>
			</div>
			<div className='footer-disclaimer_and_copyright'>
				<p className='footer_disclaimer'>
					DISCLAIMER: Monster Hunter, Monster Hunter World, and all assets from
					the Monster Hunter franchise and their rights all belong to Capcom.
					This website is a work of fiction, all content is entirely made up by
					the author of this site. The author claims no ownership whatsoever
					over any assets used on this site of which have their rightful
					creators and owners.
				</p>
				<p className='footer_copyright'>
					Copyright © 2024 Khaled Ajaj. All rights reserved.
				</p>
			</div>
		</div>
	);
}
