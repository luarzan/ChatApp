import React from "react";
import 'animate.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './assets/styles/App.css';

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'


const App = ()=>(
    <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' exact component={Chat} />
    </Router>
);

export default App;