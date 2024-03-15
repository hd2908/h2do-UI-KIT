import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
}
const getSize = (size: ButtonProps["size"]) => {
  const sizes = {
    small: { padding: "0.25em 1em", fontSize: "1rem" },
    medium: { padding: "0.5em 1.4em", fontSize: "1.2rem" },
    large: { padding: "0.75em 1.8em", fontSize: "1.4rem" },
  };
  return sizes[size || "medium"]; // 기본값은 "medium"
};

const getColor = (primary: ButtonProps["primary"]) => {
  const colors = {
    primary: { color: Colors.white, background: Colors.primary },
    secondary: { color: Colors.text, background: Colors.secondary },
  };
  return primary ? colors.primary : colors.secondary;
};

const Btn = styled.button<ButtonProps>`
  ${(props) => {
    const { color, background } = getColor(props.primary);
    return css`
      color: ${color};
      background-color: ${background};
    `;
  }}
  border-radius: 4px;
  border: none;
  cursor: pointer;
  ${(props) => {
    const { padding, fontSize } = getSize(props.size);
    return css`
      padding: ${padding};
      font-size: ${fontSize};
    `;
  }};
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const labelText = label || "Button";
  return (
    <Btn type="button" size={size} primary={primary} {...props}>
      {labelText}
    </Btn>
  );
};
