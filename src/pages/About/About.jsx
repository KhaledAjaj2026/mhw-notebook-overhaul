import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import flare from '../../assets/misc/lens-flare-green.png';
import './About.css';

export default function About() {
	return (
		<div id='page_about-container'>
			<NavBar />
			<div className='about_header-container'>
				<h1 className='about_header-title'>About</h1>
				<img className='about_header-flare' src={flare} alt='lens flare' />
			</div>
			<section className='about_info-1'>
				<h3 className='about_info__heading'>Inspiration</h3>
				<img src='' alt="screenshot from in-game 'Hunters Notes'" />
				<p className='about_info-1__description'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
					fugit dignissimos ipsum vel, optio odit adipisci officiis facere quae
					error est nam velit ab provident, aperiam commodi. Exercitationem,
					quasi! Tempore.
				</p>
			</section>
			<section className='about_info-2'>
				<h3 className='about_info__heading'>Technologies</h3>
				<img src='' alt="screenshot from in-game 'Hunters Notes'" />
				<p className='about_info-2__description'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
					fugit dignissimos ipsum vel, optio odit adipisci officiis facere quae
					error est nam velit ab provident, aperiam commodi. Exercitationem,
					quasi! Tempore.
				</p>
			</section>
			<section className='about_info-3'>
				<h3 className='about_info__heading'>Lessons</h3>
				<img src='' alt="screenshot from in-game 'Hunters Notes'" />
				<p className='about_info-3__description'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
					fugit dignissimos ipsum vel, optio odit adipisci officiis facere quae
					error est nam velit ab provident, aperiam commodi. Exercitationem,
					quasi! Tempore.
				</p>
			</section>
			<Footer />
		</div>
	);
}
