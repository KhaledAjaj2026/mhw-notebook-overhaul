import NavBar from '../../components/NavBar/NavBar';
import gif1 from '../../assets/misc/mhwgif1.gif';
import flare from '../../assets/misc/lens-flare-green.png';
import './Home.css';

export default function Home() {
	return (
		<div id='page_home-container'>
			<NavBar />
			<h1 className='home_header'>Discover Monsters</h1>
			<img className='home_header_flare' src={flare} alt='lens flare' />
			<div className='home_gif-container'></div>
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
