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

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
