import React from "react";
import "./App.css";
import FormikSignUpForm from "./Form.js";
import Registered from "./GetRequest";


function App() {
 
 return (
    <div className="App">
      <FormikSignUpForm />
      <Registered />
    </div>
  );
}

export default App;
