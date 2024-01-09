import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<footer className='footer-container'>
			<div className='footer_title__navigation'>
				<h4 className='footer_title'>
					Monster Hunter World
					<br />
					Hunters Notes
				</h4>
				<div className='footer_navigation'>
					<ul>
						<li>
							<a
								href='/'
								className='footer_navigation-link hover-underline-animation'
							>
								Home
							</a>
						</li>
						<li>
							<a
								href='/'
								className='footer_navigation-link hover-underline-animation'
							>
								Search
							</a>
						</li>
						<li>
							<a
								href='/'
								className='footer_navigation-link hover-underline-animation'
							>
								About
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer_disclaimer__copyright'>
				<p className='footer_disclaimer'>
					DISCLAIMER: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsum facilis, repellat blanditiis odio quasi officiis. Cupiditate
					incidunt ea, tenetur quos cum, veniam, eum enim suscipit facere maxime
					quam quas consectetur! Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Voluptas vel maiores explicabo. Itaque nulla aliquam
					quis dolorem magni assumenda soluta iste deleniti officiis? Maxime
					iure impedit illo sed recusandae aperiam.
				</p>
				<p className='footer_copyright'>
					Copyright © 2024 Khaled Ajaj. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
