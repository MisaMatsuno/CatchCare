import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Router} from 'react-router-dom';
import 'mdbreact/dist/css/mdb.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import history from './history';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  	<Router history={history}><Routes /></Router>, document.getElementById('catchglobe'),
  )
});

