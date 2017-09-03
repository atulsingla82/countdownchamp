import React, {Component} from 'react';
import './App.css';

export default class Clock extends Component {
constructor(props){
	super(props);

  this.state = {
  	days:0,
  	hours:0,
  	minutes:0,
  	seconds:0
  }
}
getTimeUntil(deadline) {
  const time = Date.parse(deadline) - Date.parse(new Date());
  console.log ('time', time)
  const days = Math.floor(time/(1000*60*60*24));
  const hours = Math.floor(time/(1000*60*60) % 24);
  const minutes = Math.floor((time/1000/60) % 60);
  const seconds = Math.floor((time/1000) % 60);
  
  // this.setState({days:days,hours:hours,minutes:minutes,seconds:seconds})
  this.setState({days,hours,minutes,seconds})

}

componentWillMount(){

this.getTimeUntil(this.props.deadline)

}

componentDidMount(){
 setInterval(() => this.getTimeUntil(this.props.deadline),1000)

}



render(){
	
	

return(

<div>
      <div className="Clock-days">{this.state.days} Days </div>
      <div className="Clock-hours">{this.state.hours} Hours</div>
      <div className="Clock-minutes">{this.state.minutes} Minutes</div>
      <div className="Clock-seconds"> {this.state.seconds} Seconds</div>
    </div>


)
}





}