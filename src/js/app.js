import React from 'react';
import ReactDOM from 'react-dom';
import Request from '../components/Request.js';
import '../sass/style.scss';
import './index.js'
import newRequest from './index.js';

newRequest();

ReactDOM.render(<Request />, document.getElementById('root'));