import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './counter.module.css'


class Display extends React.Component {


    render = () => {

        //значение счетчика на экране при некорректном вводе 'Incorrect value' при onSet === false (до сета) - 'Enter value end press set', или значение счетчика
        let name = (this.props.ErrorMinValue && this.props.ErrorMaxValue && 'Incorrect value') || (this.props.onSet === false && 'Enter value end press set') || this.props.counter;

        //стиль для некорректного ввода и для максимального значения счетчика
        let styleMaxValue = this.props.counter === this.props.maxValue || this.props.ErrorMaxValue || this.props.ErrorMinValue ? styles.maxValue : styles.spanCounter;

        return (
            <div className={styles.counter}>
                <span className={styleMaxValue}>{name}</span>
            </div>
        );
    }
}

export default Display;
