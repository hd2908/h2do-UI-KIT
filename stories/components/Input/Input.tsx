import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
import { SearchOutlined } from "@ant-design/icons";

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  value?: string;
  readonly?: boolean;
  type?: "text" | "icon";
  icon?: string;
  onChange?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: () => void;
  onKeyPress?: () => void;
}

const Inp = styled.input<InputProps>`
  outline: 0;
  font-size: 1em;
  border: none;
  padding: 0.8rem 0 0.8rem 0.6rem;
  flex:1;
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

const InpWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  color: ${Colors.text};
  border: 1px solid ${Colors.borderColor};
  border-radius: 6px;
  overflow: hidden;
  min-width: 200px;
  &:focus-within {
    border-color: ${Colors.primary};
  }
`;
const iconStyle = {
  fontSize: "1em",
  padding: "0 1em",
};

export const Input = ({
  placeholder = "텍스트를 입력해주세요.",
  disabled,
  type = "text",
  icon = "SearchOutlined",
  readonly,
  value,
  ...props
}: InputProps) => {
  return (
    <InpWrapper>
      <Inp
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={value}
        {...props}
      />
      {icon === "SearchOutlined" && type === "icon" && (
        <SearchOutlined style={iconStyle} />
      )}
    </InpWrapper>
  );
};
