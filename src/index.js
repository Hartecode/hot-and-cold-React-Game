import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Game from './components/game';

ReactDOM.render(<Header />, document.getElementById('rootHeader'));
ReactDOM.render(<Game />, document.getElementById('root'));

