import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// MDBootstrap - Not in use
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap JS - If you end up needing this, you will need JQuery and Popper as well. For more info, go to: https://getbootstrap.com/docs/4.0/getting-started/webpack/
// import 'bootstrap';

// index.CSS
import './index.css';

import App from './App.js';
import * as serviceWorker from './serviceWorker';
require('dotenv').config();


// Preloader
// const loader = document.querySelector('.loader');

// // if you want to show the loader when React loads data again
// const showLoader = () => 
// loader.classList.remove('loader--hide');

// const hideLoader = () => 
// loader.classList.add('loader--hide');




ReactDOM.render(
  <Router>
    <App 
    // hideLoader={hideLoader}
    // showLoader={showLoader} 
    />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
