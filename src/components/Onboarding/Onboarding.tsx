import * as React from "react";
import Button from "../Button";
import Input from "../input";
import Stepper from "../Stepper";
import styles from "./Onboarding.module.css";

export const Onboarding = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const setUp = ["Setup Account", "Add library folders", "Setup Tracking"];
  return (
    <div className={styles.mainImage}>
      <h1>Lets get you started </h1>
      <p className={styles.pText}>
        Generate the authentication method for securing the app
      </p>
      <div className={styles.Inputs}>
        <Input placeholder={"Username"} />
        <Input placeholder={"Passphrase"} />
      </div>

      {setUp.map((step, index) => (
        <Stepper
          value={index + 1}
          stepperText={step}
          current={currentStep === index + 1 ? true : false}
        />
      ))}

      <Button>Next</Button>
    </div>
  );
};

export default Onboarding;
