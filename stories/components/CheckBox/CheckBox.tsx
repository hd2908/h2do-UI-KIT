import React from "react";
import styled from "styled-components";
import Colors from "../../assets/Styles/Theme";

interface InputProps {
  disabled?: boolean;
  label?: string;
  checked?: boolean;
  onChange?: () => void;
}

const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })<InputProps>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
//   outline: 0;
//   font-size: 1rem;
//   border: none;
//   padding: 0.8rem 0 0.8rem 0.6rem;
//   flex: 1;
//   color: ${Colors.text};
// `

const CheckWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${Colors.borderColor};
  border-radius: 6px;
  overflow: hidden;
  &:focus-within {
    border-color: ${Colors.primary};
  }
`;

export const CheckBox = ({ disabled, checked, ...props }: InputProps) => {
  return (
    <CheckWrapper>
      <HiddenCheckBox disabled={disabled} checked={checked} {...props} />
    </CheckWrapper>
  );
};
