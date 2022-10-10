import * as React from 'react';
import styles from './index.module.css';
const Input = ({placeholder}) => {
    return (<div className={styles.inputField}><input placeholder={placeholder}>
    </input></div>  );
}

export default Input;
