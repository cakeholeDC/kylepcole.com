import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga'

ReactGA.initialize('UA-15625763-1') // Add your ID

ReactDOM.render(
	<App />,
  document.getElementById('root')
);

		    // <App />
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
