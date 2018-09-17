import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import './index.css';
//import App from './App';
//import Form from './Form';
import registerServiceWorker from './registerServiceWorker';
import Counter from './Counter';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
