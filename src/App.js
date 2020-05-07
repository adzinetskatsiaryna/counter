import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from "./Buttons";
import Display from "./Display";
import Button from "./Button";
import styles from "./button.module.css";
import Input from "./Input";



class App extends React.Component {

state = {
    counter:0,
    maxValue:0,
    minValue: 0,
    onSet: false,
};

setMaxValue = (e)=>{
    this.setState({maxValue: e.currentTarget.value,
                    onSet: false,
    })
};

setMinValue = (e)=>{
    this.setState({
        minValue: e.currentTarget.value,
        onSet: false,
    })
};

setChange = ()=>{
    this.setState({
        counter: this.state.minValue,
        onSet: true,
    })
}

addCounter =()=>{
        if(this.state.counter < this.state.maxValue){
    this.setState({
        counter:++this.state.counter
    })}
};
resetCounter=()=>{
    this.setState({
        counter: this.state.minValue
    })
};

    render = () => {
        let ErrorMaxValue = this.state.maxValue < 0 || this.state.maxValue <= this.state.minValue;
        let ErrorMinValue = this.state.minValue < 0 || this.state.minValue >= this.state.maxValue;
        let DisabledSet = ErrorMinValue || ErrorMaxValue || this.state.onSet===true ? styles.disabled : styles.button;
        let errorInput = (ErrorMaxValue || ErrorMinValue) ? 'error' : '';
        return (
            <div className='App'>
                <div className='settings'>
                    <Input title={'max value'}
                            value={this.state.maxValue}
                           set={this.setMaxValue}
                           className = {errorInput}
                    />
                    <Input title={'min value'}
                            value={this.state.minValue}
                           set={this.setMinValue}
                           className = {errorInput}
                    />

                    <Button
                        value={'SET'}
                        className={DisabledSet}
                        onClick={this.setChange}
                        counter={this.state.counter}
                        disabled={(this.state.onSet===true || ErrorMaxValue || ErrorMinValue)}
                    />
                </div>
                <div className='display'>
                   <Display
                       counter = {this.state.counter}
                       maxValue = {this.state.maxValue}
                       minValue = {this.state.minValue}
                       onSet = {this.state.onSet}
                       valueMaxMin={ErrorMaxValue || ErrorMinValue}
                   />

                   <Buttons
                       addCounter ={this.addCounter}
                       resetCounter = {this.resetCounter}
                       counter = {this.state.counter}
                       maxValue = {this.state.maxValue}
                       minValue = {this.state.minValue}
                       onSet={this.state.onSet}
                   />
                </div>
            </div>
        );
    }
}

export default App;
