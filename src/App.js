import React,{ Component } from 'react';
import './App.css';
import Clock from './Clock'
import{Form,FormControl,Button} from 'react-bootstrap'


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
     <div className="App-title"> Countdown Timer to : {this.state.deadline} </div>
      <div>
      <Clock
        deadline={this.state.deadline} />
     </div>
    <Form inline>
    <FormControl
     bsSize="large"
     className="Deadline-input"
     placeholder='Enter a new date '
     onChange={e => this.setState({newDeadline:e.target.value})}
     />
     <div>
    <Button bsStyle="primary" bsSize="large"  onClick = {() => this.changeDeadline()} > Submit </Button>
    </div>
    </Form>

     </div>
   )
   }

}