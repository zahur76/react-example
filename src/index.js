import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { animals } from './animals';
import reportWebVitals from './reportWebVitals';

let displayFact = (e) => {   
  const optionIndex = Math.floor(Math.random() * animals[e.target.alt].facts.length);  
  const funFact = animals[e.target.alt].facts[optionIndex]  
  ReactDOM.render(funFact, document.getElementById('fact'))
}

const images = []
for (const animal in animals) {
  images.push(<img onClick={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'/>)
};

ReactDOM.render(
 <h1 className='main-text'>react example</h1>,
  document.getElementById('root')
);
const title = ''
const animalFacts = (
  <div>
    <h1 className='main-text'>{title === '' ?  'Click an animal for a fun fact' : title}</h1>
    {images}
    <p id="fact"></p> 
  </div> 
   
)

ReactDOM.render(animalFacts, document.getElementById('main'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
