import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

const renderDropdown = (props = {}) => {
  return render(<Button {...props} />);
};
describe("Button has render", () => {
  it("with label", () => {
    renderDropdown({
      label: "label",
    });
    const Button = screen.getByText("label");
    expect(Button).toBeInTheDocument();
  });
});

describe("Click the Button", () => {
  const handleClick = jest.fn();
  it("with label", () => {
    const { getByTestId } = renderDropdown({ onClick: handleClick });
    const button = getByTestId("button");
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
