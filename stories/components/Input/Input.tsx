import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
import { SearchOutlined } from "@ant-design/icons";

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  value?: string;
  readOnly?: boolean;
  type?: "text" | "icon";
  icon?: string;
  onChange?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: () => void;
  onKeyPress?: () => void;
}

const Inp = styled.input<InputProps>`
  outline: 0;
  font-size: 1rem;
  border: none;
  padding: 0.8rem 0 0.8rem 0.6rem;
  flex: 1;
  color: ${Colors.text};
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

const IconStyle = {
  fontSize: "1rem",
  padding: "0 1em",
  color: Colors.text,
};

const InpWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${Colors.borderColor};
  border-radius: 6px;
  overflow: hidden;
  min-width: 200px;
  &:focus-within {
    border-color: ${Colors.primary};
  }
`;

export const Input = (props: InputProps) => {
  return (
    <InpWrapper>
      <Inp {...props} />
      {props.icon === "SearchOutlined" && props.type === "icon" && (
        <SearchOutlined style={IconStyle} />
      )}
    </InpWrapper>
  );
};
