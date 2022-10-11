import * as React from "react";
import styles from "./index.module.css";

// export interface StepperProps {
//     value: number;
//     stepperText: string;
// }

const Stepper = ({ value, stepperText, current }) => {
  return (
    <ol className={styles.Stepper}>
      <li className={styles.StepperItem}>
        <div>
          <h3 className={styles.StepperTitle}>{current ? value : value}</h3>
          <p className={styles.StepperText}>{stepperText}</p>
        </div>
      </li>
    </ol>
  );
};

export default Stepper;
