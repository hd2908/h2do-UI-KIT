import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";

interface DropdownProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
  onChange?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: () => void;
  onKeyPress?: () => void;
}

const MultiLineInput = styled.div<DropdownProps>`
  outline: 0;
  font-size: 1rem;
  background-color: #f9f9f9;
  border: none;
  padding: 0.8rem 0.6rem;
  flex: 1;
  color: ${Colors.text};
  resize: none;
  ${(props) => {
    return (
      props.disabled &&
      css`
        opacity: 0.5;
        cursor: default;
      `
    );
  }};
`;

export const Dropdown = ({
  placeholder = "텍스트를 입력해주세요.",
  disabled,
  readOnly,
  value,
  ...props
}: DropdownProps) => {
  return (
    <MultiLineInput
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      {...props}
    />
  );
};
