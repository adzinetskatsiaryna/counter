import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './input.module.css'




class Input extends React.Component {


    render = () => {
        return (
            <div className={styles.inputWrapper}>
                <div className={styles.title}>{this.props.title}</div>
                <input
                    type='number'
                    value={this.props.value}
                    onFocus={this.props.set}
                    // autoFocus={true}
                    onChange={this.props.set}
                    className={this.props.className}
                />
            </div>
        );
    }
}

export default Input;
