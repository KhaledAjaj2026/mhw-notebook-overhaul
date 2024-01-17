import React from 'react';
import Search from '../../components/Search/Search';
import './Leaf.css';

function Leaf({ open }) {
	return (
		<div className={`book-leaf${open ? '' : ' hidden'}`}>
			<Search />
		</div>
	);
}

export default Leaf;
