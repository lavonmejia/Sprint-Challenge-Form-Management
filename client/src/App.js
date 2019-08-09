import React from 'react';
import './App.css';
import FormikSignUpForm from './Form.js';
import Registered from './GetRequest';
import { makeClass } from './Class';

function App() {
  return (
    <div className="App">
    <makeClass/>
      <FormikSignUpForm />
      <Registered />
    </div>
  );
}

export default App;
