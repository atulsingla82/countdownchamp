import React,{ Component } from 'react';
import './App.css';

export default class App extends Component {
  
   render(){
    return(
    <div className="App"> 
    <div className="App-title"> Countdown Timer </div>
    <div>
    <div className="Clock-days"> Days: </div>
    <div className="Clock-hours"> Hours:</div>
    <div className="Clock-minutes"> Minutes:</div>
    <div className="Clock-seconds"> Seconds:</div>
    </div>

    <div>
    <input placeholder='newdate' />
    <button> Submit </button>
    </div>

     </div>
   )
   }

}