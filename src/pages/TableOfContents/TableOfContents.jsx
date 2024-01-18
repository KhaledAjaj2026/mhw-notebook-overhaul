import React from 'react';
import './TableOfContents.css';

export default function TableOfContents(setFlip) {
	return (
		<>
			<h2 className='toc-leaf_title'>Table of Contents</h2>
			<div className='toc-list'>
				<div className='toc-list-row_1'>
					<ul>
						<li>Great Jagras</li>
						<li>Kulu-Ya-Ku</li>
						<li>Barroth</li>
						<li>Jyuratodus</li>
						<li>Pukei-Pukei</li>
						<li>Anjanath</li>
						<li>Tzi-tzi Ya-ku</li>
						<li>Paolumu</li>
						<li>Anjanath</li>
						<li>Rathain</li>
					</ul>
				</div>
				<div className='toc-list-row_2'>
					<ul>
						<li>Rathalos</li>
						<li>Great Girros</li>
						<li>Diablos</li>
						<li>Odogaron</li>
						<li>Radobaan</li>
						<li>Tigrex</li>
						<li>Rajang</li>
						<li>Glavenus</li>
						<li>Bazelgeuse</li>
						<li>Nergigante</li>
					</ul>
				</div>
			</div>

			<button type='button' className='turn-leaf' onClick={setFlip}>
				Go to Search
			</button>
		</>
	);
}
