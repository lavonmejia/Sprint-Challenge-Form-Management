import React from "react";
import "./App.css";
import FormikSignUpForm from "./Form.js";
import Registered from "./GetRequest";
import { render } from "@testing-library/react";


function App() {
   
 return (
    <div className="App">
      <FormikSignUpForm />
      <Registered />
    </div>
  );
}

export default App;
