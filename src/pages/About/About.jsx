import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import flare from '../../assets/misc/lens-flare-green.png';
import huntersNotes from '../../assets/misc/hunters-notes.png';
import technologies from '../../assets/misc/technologies.png';
import figmaDesign from '../../assets/misc/figma-design.png';
import './About.css';

export default function About() {
	return (
		<div id='page_about-container'>
			<NavBar />
			<header className='main-header_container'>
				<h1 className='main-header_title'>Hunting made simple</h1>
				<img className='main-header_flare' src={flare} alt='lens flare' />
			</header>
			<div className='main-description'>
				<p>
					A tool for researching monsters, a better way to learn about the
					ecology of Astera.
				</p>
			</div>
			<main className='about_main'>
				<section className='about_section'>
					<div className='about_info__heading-figure'>
						<h3 className='about_info__heading'>Inspiration</h3>
						<figure>
							<img
								src={huntersNotes}
								alt="screenshot from in-game 'Hunters Notes'"
								className='about_info__image'
							/>
							<figcaption>Screenshot from in-game 'Hunters Notes'</figcaption>
						</figure>
					</div>
					<p className='about_info-description'>
						The in-game “Hunters Notes” menu provided a perfect idea for a
						web-based API search tool, and a pre-existing MHW API helped bring
						this project to fruition.
					</p>
				</section>
				<section className='about_section'>
					<div className='about_info__heading-figure'>
						<h3 className='about_info__heading'>Technologies</h3>
						<figure>
							<img
								src={technologies}
								alt='technologies used for this project'
								className='about_info__image'
							/>
							<figcaption>Technologies used for this project</figcaption>
						</figure>
					</div>
					<p className='about_info-description'>
						Figma was the perfect tool for designing each webpage. With the help
						of React and SASS the front-end was easily compartmentalized into
						reusable components. Axios was used to fetch data from the API.
					</p>
				</section>
				<section className='about_section'>
					<div className='about_info__heading-figure'>
						<h3 className='about_info__heading'>Lessons</h3>
						<figure>
							<img
								src={figmaDesign}
								alt='figma file displaying all webpages and their designs'
								className='about_info__image'
							/>
							<figcaption>
								Figma file displaying all webpages and their designs
							</figcaption>
						</figure>
					</div>
					<p className='about_info-description'>
						Learning to use Figma was a seamless task, thanks to previous
						experience in Photoshop. The greatest challenge of this website was
						presenting data in an organized and attractive fashion, while
						learning to make better design choices that adhere to W3C standards
						as well as accessibility guidelines.
					</p>
				</section>
			</main>
			<Footer />
		</div>
	);
}
