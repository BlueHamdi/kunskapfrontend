import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Play from './components/Play/Play';

import Contact from './components/Contact/Contact';
import Instruction from './components/Instruction/Instruction';
import Quiz from './components/Quiz/Quiz';
import Scorefetching from './components/Highscore/ScoreFetching';

import reportWebVitals from './reportWebVitals';
import About from './components/About/About';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import Practice from './components/Practice/Practice';
import Login from './components/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <Routes>
  <Route exact path="/instruction" element={<Instruction/>} />
    <Route path="/quiz" element={<Quiz/>} />
    <Route path="/contact" element={<Contact/>} />
     <Route path="/Scorefetching" element={<Scorefetching/>} />

    <Route exact path="/practice" element={<Practice/>} />
    <Route path="/instruction" element={<Instruction/>} />
    <Route path='/' element= {<App/>}/>
    <Route path="/play" element= {<Play/>}/>
    <Route path="/practice" element= {<Practice/>}/>
    <Route path= "contact" element= {<Contact/>}/>
    <Route path="/about" element= {<About/>}/>
    <Route path="/login" element= {<Login/>}/>
  </Routes>
 </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
