import React,{ Component } from 'react';
import './App.css';

export default class App extends Component {
   
   constructor(props){
    super(props);

    this.state = {
        deadline: " "
    }
   }

   changeDeadline(){ 
      // console.log('state',this.state)
      this.setState({deadline:this.state.newDeadline})
   }


   render(){
    return(
    <div className="App"> 
     <div className="App-title"> Countdown Timer to {this.state.deadline} </div>
    <div>
      <div className="Clock-days"> Days: </div>
      <div className="Clock-hours"> Hours:</div>
      <div className="Clock-minutes"> Minutes:</div>
      <div className="Clock-seconds"> Seconds:</div>
    </div>

    <div>
    <input placeholder='newdate'
           onChange={e => this.setState({newDeadline:e.target.value})}
     />
    <button onClick = {() => this.changeDeadline()} > Submit </button>
    </div>

     </div>
   )
   }

}