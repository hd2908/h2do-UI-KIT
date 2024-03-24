import React, { ChangeEvent } from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
import { CheckOutlined } from "@ant-design/icons";

interface CheckboxProps {
  disabled?: boolean;
  label?: string;
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (element: Element) => void;
}
const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  &:checked + label {
    border-color: rgba(255, 255, 255, 0);
    background-color: ${Colors.primary};
  }
  &:checked + label > span {
    visibility: visible;
  }
  &:disabled ~ label {
    opacity: 0.5;
  }
`;
const VisibleCheckBox = styled.label`
  transition: 0.4s;
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  border: 1px solid ${Colors.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 1rem;
    color: #fff;
    visibility: hidden;
  }
`;

const CheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const CheckLabel = styled.label`
  font-size: 1rem;
  padding-left: 6px;
  cursor: pointer;
`;

export const CheckBox = (props: CheckboxProps) => {
  return (
    <CheckWrapper>
      <HiddenCheckBox
        id={props.name}
        data-testid="checkbox"
        {...props}
        onChange={(e) => props.onChange && props.onChange(e.target)}
      />
      <VisibleCheckBox htmlFor={props.name}>
        <CheckOutlined />
      </VisibleCheckBox>
      <CheckLabel data-testid="label" htmlFor={props.name}>
        {props.label}
      </CheckLabel>
    </CheckWrapper>
  );
};
