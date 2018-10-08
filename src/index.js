import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainPage />, document.getElementById('root'));
serviceWorker.register();