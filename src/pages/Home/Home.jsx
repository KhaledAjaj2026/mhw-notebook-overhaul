import NavBar from '../../components/NavBar/NavBar';
import flare from '../../assets/misc/lens-flare-green.png';
import './Home.css';
import Carousel from '../../components/Carousel/Carousel';

export default function Home() {
	return (
		<div id='page_home-container'>
			<NavBar />
			<div className='home_header-container'>
				<h1 className='home_header-title'>Discover Monsters</h1>
				<img className='home_header-flare' src={flare} alt='lens flare' />
			</div>
			<Carousel />
			<div className='home_description'>
				<p>
					Learn about monster ecology, hunting techniques, quest rewards, and
					more
				</p>
			</div>
			<a href='/' className='home_search-link'>
				Search Now
			</a>
		</div>
	);
}
