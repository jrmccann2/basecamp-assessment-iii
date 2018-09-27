import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><div className="welcome"><App2 /></div><div className='App3'><App3 /></div></div>, document.getElementById('root'));
registerServiceWorker();
