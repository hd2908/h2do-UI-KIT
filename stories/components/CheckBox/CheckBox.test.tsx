import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { CheckBox } from "./CheckBox";

const renderDropdown = (props = {}) => {
  return render(<CheckBox name="test" {...props} />);
};
const onChange = jest.fn();
const { getByTestId } = renderDropdown({
  name: "name",
  label: "label",
  onChange: onChange,
});
const checkbox = getByTestId("checkbox");
const label = getByTestId("label");
describe("CheckBox has render", () => {
  expect(checkbox).toBeInTheDocument();
  it("with label", () => {
    
    expect(label).toHaveTextContent("label");
  });
});

describe("check the CheckBox", () => {
  fireEvent.click(checkbox);
  expect(onChange).toHaveBeenCalled()
  fireEvent.click(label);
  expect(onChange).toHaveBeenCalled()
});
