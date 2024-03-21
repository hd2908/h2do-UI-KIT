import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
import { DownOutlined } from "@ant-design/icons";
import ReactDOM, { createPortal } from "react-dom";

interface DropdownProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  type?: "primary" | "MultiSelect" | undefined;
  list: Array<string>;
  name: string;
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
`;

const DropdownValue = styled.div`
  padding: ${DropdownInnerPadding};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .arrow {
    color: ${Colors.borderColor};
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
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

const element = (list: Array<string>) => {
  return (
    list &&
    list.map((val) => (
      <DropdownItem className="dropdown-option">{val}</DropdownItem>
    ))
  );
};

export const Dropdown = ({
  disabled,
  value,
  list,
  placeholder,
  type,
  name = "dropdown",
  ...props
}: DropdownProps) => {
  //TODO: portalTarget 변경하는 방법 고안
  const portalTarget = document.getElementById(name);
  const [isActive, setIsActive] = useState(true);
  const DropdownHandle = () => {
    setIsActive(!isActive);
  };
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        Array.from(document.querySelectorAll(".dropdown-option")).includes(
          event.target
        )
      ) {
        return;
      }
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <DropdownWrapper onClick={DropdownHandle}>
      <DropdownValue>
        <span>{placeholder ? placeholder : value}</span>
        <DownOutlined className="arrow" />
      </DropdownValue>
      <DropdownItemWrapper id={name} isActive={isActive}>
        {portalTarget && ReactDOM.createPortal(element(list), portalTarget)}
      </DropdownItemWrapper>
    </DropdownWrapper>
  );
};
