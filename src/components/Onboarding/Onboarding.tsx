import * as React from 'react';
import Button from '../Button';
import Input from '../input';
import Stepper from '../Stepper';
import styles from "./Onboarding.module.css";

export const Onboarding = () => {
    const setUp = ['Setup Account', 'Add library folders', 'Setup Tracking']
    return(<div>
        <h1 >Lets get you started </h1>
        <p>Generate the authentication method for securing the app</p>
        <div className={styles.Inputs}>
        <Input placeholder={'Username'} />
    <Input placeholder={'Passphrase'}/>

        </div>

    {setUp.map((step, index) => <Stepper value={index + 1} stepperText={step} />)}

    <Button>Next</Button>
  <div style={{padding: '10px'}}><img src="assets/Beach_Monochromatic 1.png" /></div>
    </div>)
}

export default Onboarding;
