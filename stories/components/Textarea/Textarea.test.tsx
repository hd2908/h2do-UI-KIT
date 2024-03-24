import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Textarea } from "./Textarea";

const renderDropdown = (props = {}) => {
  return render(<Textarea {...props} />);
};
describe("Textarea has render", () => {
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
});

describe("Textarea has change", () => {
  const { getByTestId } = renderDropdown();
  const textareaElement = getByTestId("textarea");
  it("changes the value", () => {
    fireEvent.change(textareaElement, { target: { value: "new value" } });
  });
  it("changes the value", () => {
    fireEvent.keyUp(textareaElement, { target: { value: "new value" } });
  });

  it("changes the value", () => {
    fireEvent.keyDown(textareaElement, { target: { value: "new value" } });
  });
  it("changes the value", () => {
    fireEvent.keyPress(textareaElement, { target: { value: "new value" } });
  });
});
