import React from 'react';
import logo from './logo.svg';
import './App.css';
import classes from './counter.module.css'



class Display extends React.Component {


    render = () => {

        let error = this.props.counter === this.props.maxValue ? classes.error : '';
        return (
            <div className={classes.counter}>
                   <span className={ `spanCounter + ${error}`}>{this.props.counter}</span>
            </div>
        );
    }
}

export default Display;
