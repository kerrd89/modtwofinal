import React, { Component } from 'react';
import { pick, map, extend , sortedUniq , flatten, groupBy } from 'lodash';
import scoreWord, {} from '../index';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      points: '',
      multiplier: 1
    };
  }

  updateWord(e) {
    let string = e.target.value
    let score =  scoreWord(string, this.state.multiplier)
    this.setState({word: string, points: score});
  }



  render() {
    return (
      <div className="Application">
        <p>{this.state.points}</p>
        <input type="text"
         placeholder="enterwordhere"
         onChange={(e)=>this.updateWord(e)}
         />
         <input type="number"
          placeholder="enter multiplier"
          onChange={(e)=>this.setState({multiplier: e.target.value})}
          />
      </div>
    )
  }
}
