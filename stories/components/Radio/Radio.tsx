import React, { ChangeEvent } from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
import { CheckOutlined } from "@ant-design/icons";

interface RadioProps {
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  name: string;
  value: Array<string>;
  onChange?: () => void;
}
const HiddenRadio = styled.input.attrs({ type: "radio" })`
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
const VisibleRadio = styled.label`
  transition: 0.4s;
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
  border: 1px solid ${Colors.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 2px;
    background-color: #fff;
  }
  span {
    font-size: 1rem;
    color: #fff;
    visibility: hidden;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin: 5px;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  padding-left: 6px;
  cursor: pointer;
`;

export const Radio = ({
  disabled,
  checked,
  name,
  value,
  onChange,
}: RadioProps) => {
  const changeHandler = (e: ChangeEvent) => {
    console.log(e);
  };
  return value.map((val, i) => (
    <RadioWrapper>
      <HiddenRadio
        disabled={disabled}
        value={val}
        name={name}
        defaultChecked={checked && i == 0 ? true : false}
        onChange={changeHandler}
        id={val}
      />
      <VisibleRadio htmlFor={val}></VisibleRadio>
      <RadioLabel htmlFor={val}>{val}</RadioLabel>
    </RadioWrapper>
  ));
};
