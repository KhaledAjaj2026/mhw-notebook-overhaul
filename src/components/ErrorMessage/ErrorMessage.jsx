import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage({ error }) {
	return (
		<div className='error_message-container'>
			<p className='error_message-text'>{error}</p>
		</div>
	);
}
