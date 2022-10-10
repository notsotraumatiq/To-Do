import React from 'react'
import Button from './components/Button'
import Input from './components/input'
import Stepper from './components/Stepper'

export const App = ()  => {
  const setUp = ['Setup Account', 'Add library folders', 'Setup Tracking']
  return (
    <div>
      <h1>Lets get you started </h1>
      <h2>Generate the authentication method for securing the app</h2>
  <Input placeholder={'Username'} />
  <Input placeholder={'Passphrase'}/>

  {setUp.map((step, index) => <Stepper value={index + 1} stepperText={step} />)}

  <Button>Next</Button>
<div style={{padding: '10px'}}><img src="assets/Beach_Monochromatic 1.png" alt="" /></div>
  </div>)
}
