import React from 'react';
import ReactDOM from 'react-dom';
import Request from '../components/Request.js';
import Profile from '../components/Profile.js';
import '../sass/style.scss';
import newRequest from './index.js';

newRequest();

ReactDOM.render(<Request />, document.getElementById('root'));
ReactDOM.render(<Profile />, document.getElementById('profile'));