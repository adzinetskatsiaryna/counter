import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './button.module.css'
import Button from "./Button";




class Buttons extends React.Component {


    render = () => {

        let buttonAddDisebled = this.props.onSet===false || this.props.counter===this.props.maxValue;
        let buttonResetDisebled = this.props.onSet===false || this.props.counter === this.props.minValue;
        let disebledStyleAdd = buttonAddDisebled ? styles.disabled : styles.button;
        let disebledStyleReset = buttonResetDisebled ? styles.disabled : styles.button;
        return (
            <div className={styles.buttons}>
                    <Button onClick={this.props.addCounter} disabled={buttonAddDisebled} value={'ADD'} className={disebledStyleAdd} />
                    <Button onClick={this.props.resetCounter} disabled={buttonResetDisebled} value={"RESET"} className={disebledStyleReset}/>
            </div>
        );
    }
}

export default Buttons;
