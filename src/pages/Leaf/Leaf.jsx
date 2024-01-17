import React from 'react';
import Search from '../../components/Search/Search';
import './Leaf.css';

function Leaf({ open }) {
	return (
		<div className={`book-leaf${open ? '' : ' hidden'}`}>
			<h2 className='book-leaf_title'>
				<span className='book-leaf_title-top'>Discover the</span>
				<br />
				New World
			</h2>
			<Search />
		</div>
	);
}

export default Leaf;
