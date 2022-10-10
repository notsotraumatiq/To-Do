import * as React from 'react';
import styles from './index.module.css';

const Button = ({children}) => {
    return (<div><button className={styles.Button}>{children}</button></div> );
}

export default Button;
