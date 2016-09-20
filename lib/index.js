import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application';

require('./style.scss');

render(<Application/>, document.getElementById('application'));



let scoreWord = ( string , multiplier ) => {
  let letterScores = {
    A: 1, B: 3, C: 3, D: 2,
    E: 1, F: 4, G: 2, H: 4,
    I: 1, J: 8, K: 5, L: 1,
    M: 3, N: 1, O: 1, P: 3,
    Q: 10, R: 1, S: 1, T: 1,
    U: 1, V: 4, W: 4, X: 8,
    Y: 4, Z: 10
  };
  if (!string) return 0
  let trimString = string.trim();
  let scores = [];
  for(let i = 0; i < trimString.length; i ++) {
    scores.push(letterScores[trimString[i].toUpperCase()]);
  }
  let sum = scores.reduce((a, b) => a + b, 0);
  return (sum * multiplier);
};

export default scoreWord;
