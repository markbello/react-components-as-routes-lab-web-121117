import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import data from './data'
import { BrowserRouter as Router } from 'react-router-dom'

render (
  <Router>
    <App data={data}/>
  </Router>,
  document.getElementById('root')
);
