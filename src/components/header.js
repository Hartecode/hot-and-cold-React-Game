import React from 'react';
import './header.css';
import About from './about';
// import RestGame from 'restgame';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayAbout: false
		}

		this.onClickOn = this.onClickOn.bind(this);
		this.omClickOff = this.onClickOff.bind(this);
	}

	onClickOn(e) {
		e.preventDefault();
		this.setState({
			displayAbout: true
		})
		console.log(this.state.displayAbout);
	}

	onClickOff(e) {
		e.preventDefault();
		this.setState({
			displayAbout: false
		})
		console.log(this.state.displayAbout);
	}

	render() {
		const displayAbout = this.state.displayAbout;
		console.log(displayAbout);

		return (
			<header>
				<nav>
					<ul className="clearfix">
						<li><a onClick={this.onClickOn} className="what" href="#">What?</a></li>
						<li><a className="new js-new-game" href="#">+ New Game</a></li>
					</ul>
				</nav>
				<About style={displayAbout}  onClick={e => this.onClickOff(e)} />
				
				<h1>Hot or Cold</h1>
			</header>
		);
	}
	
}
