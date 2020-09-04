import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
    render(<App />)
    const formHeader = screen.getByText(/react plants/i)
        expect(formHeader).toBeTruthy()  

test("form shows success message on submit with form details", () => {}); 
render(<CheckoutForm/>)
    const fName = screen.getByLabelText(/First Name:/i)
    expect(fName).toBeTruthy()
    fireEvent.change(fName, {target: { value: 'Hang'}})

    const lName = screen.getByLabelText(/Last Name:/i)
    expect(lName).toBeTruthy()
    fireEvent.change(lName, {target: { value: 'Luong'}})

    const addInput = screen.getByLabelText(/address:/i)
    expect(addInput).toBeTruthy()
    fireEvent.change(addInput, {target: { value: '123 Yesler'}})

    const city = screen.getByLabelText(/city:/i)
    expect(city).toBeTruthy()
    fireEvent.change(city, {target: { value: 'San Jose'}})

    const state = screen.getByLabelText(/state:/i)
    expect(state).toBeTruthy()
    fireEvent.change(state, {target: { value: 'California'}})

    const zip = screen.getByLabelText(/zip:/i)
    expect(zip).toBeTruthy()
    fireEvent.change(zip, {target: { value: '12345'}})
    
    const submit = screen.getByText(/succesfully order/i)
    expect(submit).toBeTruthy()
    fireEvent.click(submit)

    const success = screen.getByText(/succesfully order/i)
    expect(success).toBeTruthy()
