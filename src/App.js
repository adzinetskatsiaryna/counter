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
        counter: 0,
        maxValue: 5,
        minValue: 0,
        onSet: false,
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('state', stateAsString)
    };

    restoreState = () => {
        let stateAsString = localStorage.getItem('state');
        if (stateAsString) {
            let state = JSON.parse(stateAsString);
            this.setState(state)
        }

    };

    componentDidMount() {
        this.restoreState()
    }


//получаем значение инпута и устанавливаем его maxValue, через изменение стейта

    setMaxValue = (e) => {
        this.setState({
            maxValue: Number(e.currentTarget.value),
            onSet: false,
        }, this.saveState)
    };

//получаем значение инпута и утонавливаем его MinValue

    setMinValue = (e) => {
        this.setState({
            minValue: Number(e.currentTarget.value),
            onSet: false,
        }, this.saveState)
    };

//сетаем выбранные значения в счетчик

    setChange = () => {
        this.setState({
            counter: this.state.minValue,
            onSet: true,
        }, this.saveState)
    };

//изменяем счетчик, если значение счетчика меньше максимального увеличиваем счетчик на один

    addCounter = () => {
        if (this.state.counter < this.state.maxValue) {
            this.setState({
                counter: this.state.counter + 1
            }, this.saveState)
        }
    };

//сброс счетчика, устанавливаем значение счетчика = minValue

    resetCounter = () => {
        this.setState({
            counter: this.state.minValue
        })
    };


    render = () => {
        debugger
        //проверяем минимальное и максимальное значения на отрицательные, равные друг другу, минимальное не должно быть больше максимального

        let ErrorMaxValue = this.state.maxValue < 0 || this.state.maxValue <= this.state.minValue;
        let ErrorMinValue = this.state.minValue < 0 || this.state.minValue >= this.state.maxValue;

        //переменная для создания стиля для задизейбленной кнопки
        let DisabledSet = ErrorMinValue || ErrorMaxValue || this.state.onSet === true ? styles.disabled : styles.button;

        //переменная для инпутов с некорректными данными
        let errorInput = (ErrorMaxValue || ErrorMinValue) ? 'error' : '';
        return (
            <div className='App'>
                <div className='settings'>
                    <Input title={'max value'}
                           value={this.state.maxValue}
                           set={this.setMaxValue}
                           className={errorInput}
                    />
                    <Input title={'min value'}
                           value={this.state.minValue}
                           set={this.setMinValue}
                           className={errorInput}
                    />

                    <Button
                        value={'SET'}
                        className={DisabledSet}
                        onClick={this.setChange}
                        counter={this.state.counter}
                        disabled={(this.state.onSet === true || ErrorMaxValue || ErrorMinValue)}
                    />
                </div>
                <div className='display'>
                    <Display
                        counter={this.state.counter}
                        maxValue={this.state.maxValue}
                        minValue={this.state.minValue}
                        onSet={this.state.onSet}
                        ErrorMaxValue={ErrorMaxValue}
                        ErrorMinValue={ErrorMinValue}
                    />

                    <Buttons
                        className='buttonWrapper'
                        addCounter={this.addCounter}
                        resetCounter={this.resetCounter}
                        counter={this.state.counter}
                        maxValue={this.state.maxValue}
                        minValue={this.state.minValue}
                        onSet={this.state.onSet}
                    />
                </div>
            </div>
        );
    }
}

export default App;
