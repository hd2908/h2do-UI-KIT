import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}
const getSize = (size: ButtonProps["size"]) => {
  const sizes = {
    small: { padding: "0.25em 1em", fontSize: "1rem" },
    medium: { padding: "0.5em 1.4em", fontSize: "1.2rem" },
    large: { padding: "0.75em 1.8em", fontSize: "1.4rem" },
  };
  return sizes[size || "medium"];
};

const getColor = (
  primary: ButtonProps["primary"],
  backgroundColor: ButtonProps["backgroundColor"]
) => {
  const colors = {
    primary: { color: Colors.white, background: Colors.primary },
    secondary: { color: Colors.text, background: Colors.secondary },
    backgroundColor: { color: Colors.white, background: backgroundColor },
  };
  return backgroundColor
    ? colors.backgroundColor
    : primary
      ? colors.primary
      : colors.secondary;
};

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  ${(props) => {
    const { color, background } = getColor(
      props.primary,
      props.backgroundColor
    );
    return css`
      color: ${color};
      background-color: ${background};
    `;
  }}
  ${(props) => {
    const { padding, fontSize } = getSize(props.size);
    return css`
      padding: ${padding};
      font-size: ${fontSize};
    `;
  }};
  ${(props) => {
    return (
      props.disabled &&
      css`
        opacity: 0.5;
        cursor: default;
      `
    );
  }};
  border-radius: 4px;
  border: none;
`;

export const Button = ({
  size = "medium",
  label = "Button",
  ...props
}: ButtonProps) => {
  const labelText = label || "Button";
  return (
    <StyledButton type="button" size={size} {...props}>
      {labelText}
    </StyledButton>
  );
};
