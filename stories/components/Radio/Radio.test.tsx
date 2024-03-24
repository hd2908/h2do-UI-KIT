import "@testing-library/jest-dom";
import React from "react";
import {
  render,
  fireEvent,
  screen,
  getAllByAltText,
} from "@testing-library/react";
import { Radio } from "./Radio";
import { sampleList } from "../data";
const renderDropdown = (props = {}) => {
  return render(<Radio lists={sampleList} name="test" {...props} />);
};
const onChange = jest.fn();
const { container, getAllByTestId } = renderDropdown({
  name: "name",
  onChange: onChange,
});
const radio = getAllByTestId("radio");
const label = getAllByTestId("label");


describe("Radio has render", () => {
  expect(radio[0]).toBeInTheDocument();
  expect(radio[1]).toBeInTheDocument();
  it("with label", () => {
    expect(label[0]).toHaveTextContent(sampleList[0]);
  });
});

describe("check the Radio", () => {
  fireEvent.click(radio[0]);
  expect(onChange).toHaveBeenCalled();
  fireEvent.click(label[0]);
  expect(onChange).toHaveBeenCalled();
});
