import React from 'react';
import logo from './logo.svg';
import './App.css';
import classes from './button.module.css'




class Button extends React.Component {


    render = () => {
        return (
            <input
                type='button'
                value={this.props.value}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                className={this.props.className}
                counter={this.props.counter}
            />
        );
    }
}

export default Button;
