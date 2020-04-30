import React from 'react';
import logo from './logo.svg';
import './App.css';
import classes from './button.module.css'




class Button extends React.Component {


    render = () => {

        let buttonDisebled = this.props.counter===this.props.maxValue
        let buttonResetDisebled = this.props.counter === this.props.minValue

        return (
            <div className={classes.buttnClass}>
                    <button onClick={this.props.addCounter} disabled={buttonDisebled}>onn</button>,
                    <button onClick={this.props.resetCounter} disabled={buttonResetDisebled}>reset</button>
            </div>
        );
    }
}

export default Button;
