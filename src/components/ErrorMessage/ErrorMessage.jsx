import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage() {
	return (
		<div className='error_message-container'>
			<p className='error_message-text'>
				Error: No monster found or incorrect input
			</p>
		</div>
	);
}
