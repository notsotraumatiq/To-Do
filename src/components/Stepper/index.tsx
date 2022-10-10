import * as React from 'react';
import styles from './index.module.css';

// export interface StepperProps {
//     value: number;
//     stepperText: string;
// }

const Stepper= ({ value, stepperText }) => {
    return (
        <div className={styles.Stepper}>
            <div className={styles.StepperItem}>
                <p className={styles.StepperTitle}>{value}</p>
            <p className={styles.StepperText}>{stepperText}</p>
            </div>
        </div>
    );
}


export default Stepper;
