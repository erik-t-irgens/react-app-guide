import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// This function attaches the output of the render() method directly into the DOM by getting the element id'ed as "root", which is defined in the index.html file in ./public. <App/> is the only thing rendered, because App.js will decide itself what it will be returning to this function via components.

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
