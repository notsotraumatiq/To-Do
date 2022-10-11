import * as React from "react";
import styles from "./index.module.css";
const Input = ({ placeholder }) => {
  return (
    <div className={styles.inputField}>
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
