import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './counter.module.css'



class Display extends React.Component {


    render = () => {

        let name = (this.props.valueMaxMin && 'Incorrect value') || (this.props.onSet === false && 'Enter value end press set')|| this.props.counter;
        let styleMaxValue = this.props.counter===this.props.maxValue || this.props.valueMaxMin  ? styles.maxValue : styles.spanCounter;
        return (
            <div className={styles.counter}>
                   <span className={styleMaxValue}>{name}</span>
            </div>
        );
    }
}

export default Display;
