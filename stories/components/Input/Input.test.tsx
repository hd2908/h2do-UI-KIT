import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Input } from "./Input";

const renderDropdown = (props = {}) => {
  return render(<Input {...props} />);
};
describe("Input has render", () => {
  it("with placeholder", () => {
    renderDropdown({
      placeholder: "default placeholder",
    });
    const placeholder = screen.getByPlaceholderText("default placeholder");
    expect(placeholder).toBeInTheDocument();
  });
  it("with defaultValue", () => {
    renderDropdown({ defaultValue: "default value" });
    const value = screen.getByDisplayValue("default value");
    expect(value).toBeInTheDocument();
  });
  it("with icon", () => {
    const { getByTestId } = renderDropdown({ type: "icon" });
    const icon = getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });
});

describe("Input has change", () => {
  it("changes the value", () => {
    const { getByTestId } = renderDropdown({ type: "icon" });
    const inputElement = getByTestId("input");
    fireEvent.change(inputElement, { target: { value: "new value" } });
  });
  it("changes the value", () => {
    const { getByTestId } = renderDropdown({ type: "icon" });
    const inputElement = getByTestId("input");
    fireEvent.keyUp(inputElement, { target: { value: "new value" } });
  });

  it("changes the value", () => {
    const { getByTestId } = renderDropdown({ type: "icon" });
    const inputElement = getByTestId("input");
    fireEvent.keyDown(inputElement, { target: { value: "new value" } });
  });
  it("changes the value", () => {
    const { getByTestId } = renderDropdown({ type: "icon" });
    const inputElement = getByTestId("input");
    fireEvent.keyPress(inputElement, { target: { value: "new value" } });
  });
});
