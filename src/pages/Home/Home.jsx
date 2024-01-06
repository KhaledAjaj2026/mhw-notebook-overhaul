import NavBar from '../../components/NavBar/NavBar';
import gif1 from '../../assets/mhwgif1.gif';
import './Home.css';

export default function Home() {
	return (
		<>
			<NavBar />
			<h1>Discover Monsters</h1>
			<img src={gif1} alt='Jyuratodus fighting a Barroth' />
		</>
	);
}
