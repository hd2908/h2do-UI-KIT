import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import { dropdownList } from "../data";

const renderDropdown = (props = {}) => {
  const defaultProps = { list: dropdownList };
  return render(<Dropdown {...defaultProps} {...props} />);
};
describe("Dropdown", () => {
  it("renders with placeholder", () => {
    const { container } = renderDropdown();
    expect(container).toHaveTextContent("선택해주세요");
  });
  it("renders with selected value", () => {
    const { container } = renderDropdown({ value: "is DefaultValue" });
    expect(container).toHaveTextContent("is DefaultValue");
  });
});

describe("Dropdown list", () => {
  it("renders list when dropdown is clicked", async () => {
    renderDropdown();
    const dropdownWrapper = screen.getByTestId("dropdown");
    fireEvent.click(dropdownWrapper);
    dropdownList.forEach((item, index) => {
      expect(screen.getByTestId("dropdownOption" + index)).toBeInTheDocument();
    });
  });

  it("renders list when dropdown items is clicked", () => {
    const { getByTestId } = renderDropdown();
    const DropdownWrapper = getByTestId("dropdown");
    fireEvent.click(DropdownWrapper);
    const test = getByTestId("dropdownOption0") as Element;
    expect(test).toBeInTheDocument();
    fireEvent.mouseDown(test);
    const value = getByTestId("dropdownValue");
    expect(value).toHaveTextContent(test.innerHTML);
  });
});
