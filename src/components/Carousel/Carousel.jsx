import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';

const slides = [
	<video
		className='carousel_slide'
		autoPlay
		muted={true}
		loop={true}
		poster='/src/assets/turf-wars/turf-war_poster-1.png'
	>
		<source src='/src/assets/turf-wars/turf-war_1.mp4' type='video/mp4' />
	</video>,
	<video
		className='carousel_slide'
		autoPlay
		muted={true}
		loop={true}
		poster='/src/assets/turf-wars/turf-war_poster-2.png'
	>
		<source src='/src/assets/turf-wars/turf-war_2.mp4' type='video/mp4' />
	</video>,
	<video
		className='carousel_slide'
		autoPlay
		muted={true}
		loop={true}
		poster='/src/assets/turf-wars/turf-war_poster-3.png'
	>
		<source src='/src/assets/turf-wars/turf-war_3.mp4' type='video/mp4' />
	</video>,
	<video
		className='carousel_slide'
		autoPlay
		muted={true}
		loop={true}
		poster='/src/assets/turf-wars/turf-war_poster-4.png'
	>
		<source src='/src/assets/turf-wars/turf-war_4.mp4' type='video/mp4' />
	</video>,
];

export default function Carousel({ showSearch }) {
	return (
		<div
			id='carousel-container'
			className={`${showSearch ? '' : ''}`}
			data-aos='fade-in'
			data-aos-duration='3000'
			data-aos-delay='1000'
			data-aos-once='true'
		>
			<AliceCarousel
				items={slides}
				disableDotsControls
				disableButtonsControls
				autoPlay='true'
				autoPlayInterval={9300}
				autoPlayStrategy='none'
				animationType='fadeout'
				infinite
			/>
		</div>
	);
}
