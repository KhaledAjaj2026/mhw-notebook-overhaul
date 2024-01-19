import React from 'react';
import './FlipToPage.css';

export default function FlipToPage({ flip }) {
	return (
		<div className='flip_animation slide-up'>
			<div
				className={`flip-page flip_page-3${
					flip ? ' flip-to-result flip-change_index-3' : ' hidden'
				}`}
			></div>
			<div
				className={`flip-page flip_page-2${
					flip ? ' flip-to-result flip-change_index-2' : ' hidden'
				}`}
			></div>
			<div
				className={`flip-page${flip ? ' flip-to-result' : ' flip-leaf_close'}`}
			></div>
		</div>
	);
}
