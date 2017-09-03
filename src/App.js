import React,{ Component } from 'react';
import './App.css';
import Clock from './Clock'
export default class App extends Component {
   
   constructor(props){
    super(props);

    this.state = {
        deadline: 'December 25, 2017'

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
      <Clock
        deadline={this.state.deadline} />
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