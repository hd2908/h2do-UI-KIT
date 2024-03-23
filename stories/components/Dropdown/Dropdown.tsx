import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Colors from "../../assets/Styles/Theme";
import { DownOutlined } from "@ant-design/icons";
import ReactDOM, { createPortal } from "react-dom";

export interface DropdownProps {
  disabled?: Boolean;
  value?: string;
  type?: "primary" | "MultiSelect" | undefined;
  list: Array<string>;
  onChange?: (value: string) => void;
}

const DropdownInnerPadding = "0.7rem";

const DropdownItemWrapper = styled.ul<{ $isActive: Boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden auto;
  height: ${(props) => (props.$isActive ? "200px" : 0)};
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: 0.25s;
`;

const DropdownWrapper = styled.div<{ disabled: Boolean | undefined }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.borderColor};
  border-radius: 4px;
  position: relative;
  min-width: 300px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
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

export const Dropdown = (props: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState("선택해주세요");
  const portalTarget = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const dropdownHandle = () => {
    !props.disabled && setIsActive(!isActive);
  };

  const initPlaceholder = () => {
    props.value && setOption(props.value);
  };
  const DropdownOptions = (list: string[]) => {
    const optionHandler = (value: string): void => {
      setOption(value);
      setIsActive(false);
    };
    return (
      list &&
      list.map((item, index) => (
        <DropdownItem
          className="dropdown-option"
          data-testid={"dropdownOption" + index}
          id={"dropdownOption" + index}
          key={index}
          onMouseDown={() => {
            optionHandler(item);
            props.onChange && props.onChange(item);
          }}
        >
          {item}
        </DropdownItem>
      ))
    );
  };

  useEffect(() => {
    initPlaceholder();
    const handleOutsideClick = (event: any) => {
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
    <DropdownWrapper disabled={props.disabled} ref={containerRef}>
      <DropdownValue data-testid="dropdown" onClick={dropdownHandle}>
        <span data-testid="dropdownValue" id="dropdownValue">
          {option}
        </span>
        <DownOutlined className="arrow" />
      </DropdownValue>
      <DropdownItemWrapper ref={portalTarget} $isActive={isActive}>
        {portalTarget.current &&
          isActive &&
          ReactDOM.createPortal(
            DropdownOptions(props.list),
            portalTarget.current
          )}
      </DropdownItemWrapper>
    </DropdownWrapper>
  );
};
