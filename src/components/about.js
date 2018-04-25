import React from 'react';

export default function About(props) {
	const viewAbout = {display: 'block'};
	const hidAbout = {display: 'none'}

	return (
		<div className="overlay" style={(props.style)?  viewAbout: hidAbout} id="modal">
				<div className="content">
					<h3>What do I do?</h3>
					<div>
						<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
						<ul>
							<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
							<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
							<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
						</ul>
						<p>So, Are you ready?</p>
						<a className="js-close" href="#" onClick={props.onClick} >Got It!</a>
					</div>
				</div>
			</div>
		)
}