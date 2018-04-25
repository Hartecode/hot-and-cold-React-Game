import React from 'react';
import './game.css';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.startNewGame();
	}

	generateNumber() {
		return Math.floor(Math.random() * 100) + 1;  
	}

	registerGuess(guess) {

		this.setState({
			attempts: [...this.state.attempts, guess]
		})
		console.log(this.state.attempts);

	}

	startNewGame() {
		return {
			guessNumber: this.generateNumber(),
			attempts: [],
			message: 'Make your Guess!',
			gameOver: false
		}
	}

	generateGuessMessage(guess){
		const answer = this.state.guessNumber;
		console.log(answer);
		if(guess == answer) {
			this.setState({
				message: 'You Won. Click new game to play again',
				gameOver: true
			})
		}
	}



	render() {
		const attempts = this.state.attempts;
		const gameOver = this.state.gameOver;
		return (
			<section className="game"> 

				<h2 id="feedback" className="js-feedback">{this.state.message}
				</h2>

				<form onSubmit={event => {
					event.preventDefault();
					this.registerGuess(this.number.value);
					this.generateGuessMessage(this.number.value);
					this.number.value = '';

				}}>
					<input ref={node => this.number = node} type="number" name="user-guess" id="js-user-guess" className="text" max="100" min="1" autocomplete="off" placeholder="Enter a number between 0 and 100" required/>
	      			<input type="submit" id="js-guess-submit" className="button" styles={ (gameOver === true)? "opacity: 0" : ""} />
				</form>

	      		<p>Guess #<span className="count js-guess-count">{attempts.length}</span>!</p>

				<ul id="guessList" className="guessBox clearfix js-guess-list">
					{attempts.map(num => <li> {num} </li> )}
				</ul>

			</section>
		);
	}


}

