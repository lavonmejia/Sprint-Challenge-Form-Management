import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import FormikSignUpForm from "./Form";

describe("<FormikSignUpForm/>", () => {
  it("should render without crashing", () => {
    render(<FormikSignUpForm/>)
  })


it("should display 'terms of service, your name, password, and super'", () => {
    const { getByText, getByPlaceholderText } = render(<FormikSignUpForm />)

    getByText(/terms of service/i)
    getByPlaceholderText(/your name/i)
    getByPlaceholderText(/password/i)
    getByText(/super/i)
});
});

describe('The Button Functionality' , () => {

     it ("should register that it has been clicked", () => {
       const component = render(<FormikSignUpForm />);
       const submitButton = component.getByTestId("submit");
       fireEvent.click(submitButton);

})})
