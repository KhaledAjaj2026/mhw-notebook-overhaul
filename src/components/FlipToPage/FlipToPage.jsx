import React from 'react';
import './FlipToPage.css';

export default function FlipToPage({ turnPage }) {
	return (
		<>
			<div
				className={`flip_animation flip_page-3${
					turnPage
						? ' flip-to-result flip-change_index-3'
						: ' flip-leaf_close hidden'
				}`}
			></div>
			<div
				className={`flip_animation flip_page-2${
					turnPage
						? ' flip-to-result flip-change_index-2'
						: ' flip-leaf_close hidden'
				}`}
			></div>
			<div
				className={`flip_animation${
					turnPage ? ' flip-to-result' : ' flip-leaf_close'
				}`}
			></div>
		</>
	);
}
