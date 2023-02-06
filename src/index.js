import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Play from './components/Play/Play';
import Learn from './components/Learn/Learn';
import Datafetching from './components/ScoreFetching';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <Routes>
    <Route path='/' element= {<App/>}/>
    <Route path="/play" element= {<Play/>}/>
    <Route path="/DataFetching" element= {<Datafetching/>}/>

    <Route path="/learn" element= {<Learn/>}/>
  </Routes>
 </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
