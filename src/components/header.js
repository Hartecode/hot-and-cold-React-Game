import React from 'react';
import About from 'about';
import RestGame from 'restgame';

export default class Header export React.Componants {
	constructor(props) {
		super(props);
		this.state = {
			displayAbout: false
		}
	}
	return (<header>
			<nav>
				<ul class="clearfix">
					<li><About /></li>
					<li><RestGame /></li>
				</ul>
			</nav>
			<About />
			<h1>Hot or Cold</h1>
		</header>
		)
}
