import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";



class App extends React.Component {

state = {
    counter:0,
    maxValue:10,
    minValue: 0
}
addCounter =()=>{
        if(this.state.counter < this.state.maxValue){
    this.setState({counter:++this.state.counter})}
}
resetCounter=()=>{
    this.setState({counter:this.state.counter=this.state.minValue})
}

    render = () => {

        return (
            <div className='App'>
                <div className='display'>
                   <span>{this.state.counter}</span>
                   <Button />
                </div>
            </div>
        );
    }
}

export default App;
