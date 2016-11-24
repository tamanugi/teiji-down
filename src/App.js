import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      targeth: 18,
      targetm: 30,
      remaining: null
    };

    this.tick = this.tick.bind(this);

  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 10);
  }

  tick(){
    let currentTime = new Date();
    let endDate = new Date();
    endDate.setHours(this.state.targeth)
    endDate.setMinutes(this.state.targetm)
    endDate.setSeconds(0)
    endDate.setMilliseconds(0)
    let remaining = endDate.getTime() - currentTime.getTime();

    this.setState({remaining: this.format(remaining)})

  }

  format(msec) {
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let h = Math.floor((msec % day) / hour);
    let m = Math.floor((msec % hour) / minute);
    let s = Math.floor((msec % minute) / second);
    let ms = Math.floor(msec % second);

    let padding = (strings, ...values) => {
      var res = '';
      for(var i=0, l=strings.length; i<l; i+=1) {
        res += strings[i];
        if(i < values.length) {
          let value = values[i];
          res += (i != values.length - 1)?("0"+ value).slice(-2):("00"+ value).slice(-3);
        }
      }
      return res;
    }

    let timeFormated = padding`${h}:${m}:${s}.${ms}`
    return timeFormated;
  }

  render() {
    return (
      <div className="App">
          <h1>{this.state.remaining}</h1>
      </div>
    );
  }
}

export default App;
