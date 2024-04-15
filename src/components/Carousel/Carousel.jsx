import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';

/** Contents for AliceCarousel video carousel. */
const slides = [
	<video
		className='carousel_slide'
		autoPlay
		muted={true}
		loop={true}
		poster='/assets/turf-wars/turf-war_poster-1.png'
		playsInline
	>
		<source src='/assets/turf-wars/turf-war_1.mp4' type='video/mp4' />
	</video>,
	<video
		className='carousel_slide'
		autoPlay
		muted={true}
		loop={true}
		poster='/assets/turf-wars/turf-war_poster-2.png'
		playsInline
	>
		<source src='/assets/turf-wars/turf-war_2.mp4' type='video/mp4' />
	</video>,
	<video
		className='carousel_slide'
		autoPlay
		muted={true}
		loop={true}
		poster='/assets/turf-wars/turf-war_poster-3.png'
		playsInline
	>
		<source src='/assets/turf-wars/turf-war_3.mp4' type='video/mp4' />
	</video>,
	<video
		className='carousel_slide'
		autoPlay
		muted={true}
		loop={true}
		poster='/assets/turf-wars/turf-war_poster-4.png'
		playsInline
	>
		<source src='/assets/turf-wars/turf-war_4.mp4' type='video/mp4' />
	</video>,
];

export default function Carousel() {
	return (
		<div
			id='carousel-container'
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
