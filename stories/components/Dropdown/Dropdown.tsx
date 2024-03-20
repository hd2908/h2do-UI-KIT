import React, { useState } from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
import { DownOutlined } from "@ant-design/icons";

interface DropdownProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  type?: "primary" | "MultiSelect" | undefined;
  list: Array<string>;
  onChange?: () => void;
  onClick?: () => void;
}
const DropdownInnerPadding = "0.7rem";
const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.borderColor};
  border-radius: 4px;
  position: relative;
  min-width: 300px;
  .arrow {
    font-size: 0.6rem;
    position: absolute;
    right: ${DropdownInnerPadding};
    color: ${Colors.borderColor};
    top: ${DropdownInnerPadding};
  }
`;

const DropdownValue = styled.div`
  padding: ${DropdownInnerPadding};
  font-weight: bold;
`;

const DropdownItem = styled.li`
  list-style: none;
  padding: ${DropdownInnerPadding};
`;

const DropdownItemWrapper = styled.ul<{ isActive: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  max-height: ${(props) => (props.isActive ? "500px" : 0)};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: 0.25s;
`;

export const Dropdown = ({
  disabled,
  value,
  list,
  placeholder,
  type,
  ...props
}: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const DropdownHandle = () => {
    setIsActive(!isActive);
  };

  return (
    <DropdownWrapper>
      <DropdownValue onClick={DropdownHandle}>
        {placeholder ? placeholder : list[0]}
      </DropdownValue>
      <DropdownItemWrapper isActive={isActive}>
        {list && list.map((val) => <DropdownItem>{val}</DropdownItem>)}
      </DropdownItemWrapper>
      <DownOutlined className="arrow" />
    </DropdownWrapper>
  );
};
