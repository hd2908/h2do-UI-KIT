import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";

interface InputProps {
  disabled?: boolean;
  label?: string;
  checked?: boolean;
  value: string;
  onChange?: () => void;
}
const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })<InputProps>`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  &:checked + label {
    border-color: ${Colors.primary};
  }
`;
const VisibleCheckBox = styled.label<InputProps>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${Colors.borderColor};
  cursor: pointer;
`;

const CheckWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const CheckBox = ({
  disabled,
  value = "checked",
  checked,
  ...props
}: InputProps) => {
  return (
    <CheckWrapper value={value}>
      <HiddenCheckBox
        disabled={disabled}
        value={value}
        checked={checked}
        {...props}
        id={value}
      />
      <VisibleCheckBox value={value} htmlFor={value} />
    </CheckWrapper>
  );
};
