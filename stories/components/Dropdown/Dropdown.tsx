import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
import { DownOutlined } from "@ant-design/icons";
import ReactDOM, { createPortal } from "react-dom";

interface DropdownProps {
  disabled?: boolean;
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

export const Dropdown = ({
  disabled,
  value,
  list,
  type,
  ...props
}: DropdownProps) => {
  const [isActive, setIsActive] = useState(true);
  const [option, setOption] = useState("선택해주세요");
  const DropdownHandle = () => {
    setIsActive(!isActive);
  };
  const portalTarget = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const initPlaceholder = () => {
    value && setOption(value);
  };
  const element = (list: Array<string>) => {
    const optionHandler = (val: string): void => {
      setOption(val);
    };

    return (
      list &&
      list.map((val) => (
        <DropdownItem
          className="dropdown-option"
          onMouseDown={() => optionHandler(val)}
        >
          {val}
        </DropdownItem>
      ))
    );
  };

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
      initPlaceholder();
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <DropdownWrapper
      className="dropdown"
      ref={containerRef}
      onClick={DropdownHandle}
    >
      <DropdownValue>
        <span>{option}</span>
        <DownOutlined className="arrow" />
      </DropdownValue>
      <DropdownItemWrapper ref={portalTarget} isActive={isActive}>
        {portalTarget.current &&
          isActive &&
          ReactDOM.createPortal(element(list), portalTarget.current)}
      </DropdownItemWrapper>
    </DropdownWrapper>
  );
};
