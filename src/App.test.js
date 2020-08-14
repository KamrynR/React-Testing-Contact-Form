import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});


test('renders first name', () => {
    const { getByText } = render(<App />);
    const firstName = getByText(/First Name/i);
    expect(firstName).toBeInTheDocument();
});

test('renders last name', () => {
    const { getByText } = render(<App />);
    const lastName = getByText(/Last Name/i);
    expect(lastName).toBeInTheDocument();
});

// test('adds name', () => {
//     const {getByText, getByLabelText } = render(<App />);
//     const input = getByLabelText('First Name*');
//     fireEvent.change(input, { target : { register: 'Jett'}});

//     const nameTest = getByText('Jett');
//     expect(nameTest).toBeInTheDocument();
// });