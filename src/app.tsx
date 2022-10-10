import React from 'react'
import Button from './components/Button'
import Input from './components/input'

export const App = ()  => {
  return (
    <div>
      <h1>Lets get you started </h1>
      <h2>Generate the authentication method for securing the app</h2>
  <Input>Username</Input>
  <Input>Passphrase</Input>
  <Button>"next"</Button>
  </div>)
}
