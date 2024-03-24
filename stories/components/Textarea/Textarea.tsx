import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";

interface TextareaProps {
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  readOnly?: boolean;
  onChange?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: () => void;
  onKeyPress?: () => void;
}

const MultilineInput = styled.textarea<TextareaProps>`
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

export const Textarea = ({
  placeholder = "텍스트를 입력해주세요.",
  ...props
}: TextareaProps) => {
  return (
    <MultilineInput
      data-testid="textarea"
      placeholder={placeholder}
      {...props}
    />
  );
};
