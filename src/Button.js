import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
    click = React.createRef()

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
                   <span ref={this.click}>{this.state.counter}</span>
                    <button onClick={addCounter}>onn</button>
                    <button onClick={resetCounter}>add</button>
                </div>
            </div>
        );
    }
}

export default App;
