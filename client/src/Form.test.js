import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import FormikSignUpForm from "./Logic";

describe("<FormikSignUpForm/>", () => {
  it("should render without crashing", () => {
    render(<FormikSignUpForm/>)
  });


it("should display 'terms of service, your name, password, and super'", () => {
    const { getByText } = render(<FormikSignUpForm />)

    getByText(/terms of service/i)
    getByText(/your name/i)
    getByText(/password/i)
    getByText(/super/i)
});


describe('The Button Functionality' , () => {
     it ("should register that it has been clicked", () => {
       const component = render(<FormikSignUpForm />);
       const submitButton = component.getByTestId("submit");
       fireEvent.mousedown(submitButton);
   
       }))
       
       ;

