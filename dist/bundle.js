import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CheckOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Colors = {
  primary: '#fecb28',
  secondary: '#e9ecef',
  success: '#2dd36f',
  white: '#fff',
  text: '#495057',
  borderColor: "#adb5bd"
};

var getSize = function getSize(size) {
  var sizes = {
    small: {
      padding: "0.25em 1em",
      fontSize: "1rem"
    },
    medium: {
      padding: "0.5em 1.4em",
      fontSize: "1.2rem"
    },
    large: {
      padding: "0.75em 1.8em",
      fontSize: "1.4rem"
    }
  };
  return sizes[size || "medium"];
};
var getColor = function getColor(primary, backgroundColor) {
  var colors = {
    primary: {
      color: Colors.white,
      background: Colors.primary
    },
    secondary: {
      color: Colors.text,
      background: Colors.secondary
    },
    backgroundColor: {
      color: Colors.white,
      background: backgroundColor
    }
  };
  console.log(backgroundColor);
  return backgroundColor ? colors.backgroundColor : primary ? colors.primary : colors.secondary;
};
var Btn = styled.button(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  cursor: pointer;\n  ", "\n  ", ";\n  ", ";\n  border-radius: 4px;\n  border: none;\n"], ["\n  cursor: pointer;\n  ", "\n  ", ";\n  ", ";\n  border-radius: 4px;\n  border: none;\n"])), function (props) {
  var _a = getColor(props.primary, props.backgroundColor),
    color = _a.color,
    background = _a.background;
  return css(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n      color: ", ";\n      background-color: ", ";\n    "], ["\n      color: ", ";\n      background-color: ", ";\n    "])), color, background);
}, function (props) {
  var _a = getSize(props.size),
    padding = _a.padding,
    fontSize = _a.fontSize;
  return css(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n      padding: ", ";\n      font-size: ", ";\n    "], ["\n      padding: ", ";\n      font-size: ", ";\n    "])), padding, fontSize);
}, function (props) {
  return props.disabled && css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n        opacity: 0.5;\n        cursor: default;\n      "], ["\n        opacity: 0.5;\n        cursor: default;\n      "])));
});
/**
 * Primary UI component for user interaction
 */
var Button = function Button(_a) {
  var _b = _a.primary,
    primary = _b === void 0 ? true : _b,
    _c = _a.size,
    size = _c === void 0 ? "medium" : _c,
    backgroundColor = _a.backgroundColor,
    _d = _a.label,
    label = _d === void 0 ? "Button" : _d,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e,
    props = __rest(_a, ["primary", "size", "backgroundColor", "label", "disabled"]);
  var labelText = label || "Button";
  return /*#__PURE__*/React.createElement(Btn, _assign({
    type: "button",
    backgroundColor: backgroundColor,
    size: size,
    primary: primary,
    disabled: disabled
  }, props), labelText);
};
var templateObject_1$5, templateObject_2$5, templateObject_3$4, templateObject_4$3;

var HiddenCheckBox = styled.input.attrs({
  type: "checkbox"
})(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  &:checked + label {\n    border-color: rgba(255, 255, 255, 0);\n    background-color: ", ";\n  }\n  &:checked + label > span {\n    visibility: visible;\n  }\n  &:disabled ~ label {\n    opacity: 0.5;\n  }\n"], ["\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  &:checked + label {\n    border-color: rgba(255, 255, 255, 0);\n    background-color: ", ";\n  }\n  &:checked + label > span {\n    visibility: visible;\n  }\n  &:disabled ~ label {\n    opacity: 0.5;\n  }\n"])), Colors.primary);
var VisibleCheckBox = styled.label(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  transition: 0.4s;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  span {\n    font-size: 1rem;\n    color: #fff;\n    visibility: hidden;\n  }\n"], ["\n  transition: 0.4s;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  span {\n    font-size: 1rem;\n    color: #fff;\n    visibility: hidden;\n  }\n"])), Colors.borderColor);
var CheckWrapper = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n"])));
var CheckLabel = styled.label(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  font-size: 1rem;\n  padding-left: 6px;\n  cursor: pointer;\n"], ["\n  font-size: 1rem;\n  padding-left: 6px;\n  cursor: pointer;\n"])));
var CheckBox = function CheckBox(_a) {
  var disabled = _a.disabled,
    checked = _a.checked,
    label = _a.label,
    value = _a.value,
    defaultChecked = _a.defaultChecked;
    _a.onChange;
  var changeHandler = function changeHandler(e) {
    console.log(e);
  };
  return /*#__PURE__*/React.createElement(CheckWrapper, null, /*#__PURE__*/React.createElement(HiddenCheckBox, {
    disabled: disabled,
    value: value,
    name: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: changeHandler,
    id: value
  }), /*#__PURE__*/React.createElement(VisibleCheckBox, {
    htmlFor: value
  }, /*#__PURE__*/React.createElement(CheckOutlined, null)), /*#__PURE__*/React.createElement(CheckLabel, {
    htmlFor: value
  }, label));
};
var templateObject_1$4, templateObject_2$4, templateObject_3$3, templateObject_4$2;

var DropdownInnerPadding = "0.7rem";
var DropdownWrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  position: relative;\n  min-width: 300px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  position: relative;\n  min-width: 300px;\n"])), Colors.borderColor);
var DropdownValue = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  padding: ", ";\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  .arrow {\n    color: ", ";\n    font-size: 0.8rem;\n    display: flex;\n    align-items: center;\n  }\n"], ["\n  padding: ", ";\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  .arrow {\n    color: ", ";\n    font-size: 0.8rem;\n    display: flex;\n    align-items: center;\n  }\n"])), DropdownInnerPadding, Colors.borderColor);
var DropdownItem = styled.li(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  list-style: none;\n  padding: ", ";\n"], ["\n  list-style: none;\n  padding: ", ";\n"])), DropdownInnerPadding);
var DropdownItemWrapper = styled.ul(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  max-height: ", ";\n  opacity: ", ";\n  transition: 0.25s;\n"], ["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  max-height: ", ";\n  opacity: ", ";\n  transition: 0.25s;\n"])), function (props) {
  return props.isActive ? "500px" : 0;
}, function (props) {
  return props.isActive ? 1 : 0;
});
var element = function element(list) {
  function optionHandler(val) {
    throw new Error("Function not implemented.");
  }
  return list && list.map(function (val) {
    return /*#__PURE__*/React.createElement(DropdownItem, {
      className: "dropdown-option",
      onMouseDown: function onMouseDown() {
        return optionHandler();
      }
    }, val);
  });
};
var Dropdown = function Dropdown(_a) {
  _a.disabled;
    var value = _a.value,
    list = _a.list,
    _b = _a.placeholder,
    placeholder = _b === void 0 ? "선택해주세요" : _b;
    _a.type;
    __rest(_a, ["disabled", "value", "list", "placeholder", "type"]);
  var _c = useState(true),
    isActive = _c[0],
    setIsActive = _c[1];
  var DropdownHandle = function DropdownHandle() {
    setIsActive(!isActive);
  };
  var portalTarget = useRef(null);
  var containerRef = useRef(null);
  useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      if (Array.from(document.querySelectorAll(".dropdown-option")).includes(event.target)) {
        return;
      }
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return function () {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return /*#__PURE__*/React.createElement(DropdownWrapper, {
    className: "dropdown",
    ref: containerRef,
    onClick: DropdownHandle
  }, /*#__PURE__*/React.createElement(DropdownValue, null, /*#__PURE__*/React.createElement("span", null, value ? value : placeholder), /*#__PURE__*/React.createElement(DownOutlined, {
    className: "arrow"
  })), /*#__PURE__*/React.createElement(DropdownItemWrapper, {
    ref: portalTarget,
    isActive: isActive
  }, portalTarget.current && isActive && /*#__PURE__*/ReactDOM.createPortal(element(list), portalTarget.current)));
};
var templateObject_1$3, templateObject_2$3, templateObject_3$2, templateObject_4$1;

var Inp = styled.input(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  outline: 0;\n  font-size: 1rem;\n  border: none;\n  padding: 0.8rem 0 0.8rem 0.6rem;\n  flex: 1;\n  color: ", ";\n  ", ";\n"], ["\n  outline: 0;\n  font-size: 1rem;\n  border: none;\n  padding: 0.8rem 0 0.8rem 0.6rem;\n  flex: 1;\n  color: ", ";\n  ", ";\n"])), Colors.text, function (props) {
  return props.disabled && css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n        opacity: 0.5;\n        cursor: default;\n      "], ["\n        opacity: 0.5;\n        cursor: default;\n      "])));
});
var IconStyle = {
  fontSize: "1rem",
  padding: "0 1em",
  color: Colors.text
};
var InpWrapper = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 6px;\n  overflow: hidden;\n  min-width: 200px;\n  &:focus-within {\n    border-color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 6px;\n  overflow: hidden;\n  min-width: 200px;\n  &:focus-within {\n    border-color: ", ";\n  }\n"])), Colors.borderColor, Colors.primary);
var Input = function Input(_a) {
  var _b = _a.placeholder,
    placeholder = _b === void 0 ? "텍스트를 입력해주세요." : _b,
    disabled = _a.disabled,
    _c = _a.type,
    type = _c === void 0 ? "text" : _c,
    _d = _a.icon,
    icon = _d === void 0 ? "SearchOutlined" : _d,
    readOnly = _a.readOnly,
    value = _a.value,
    props = __rest(_a, ["placeholder", "disabled", "type", "icon", "readOnly", "value"]);
  return /*#__PURE__*/React.createElement(InpWrapper, null, /*#__PURE__*/React.createElement(Inp, _assign({
    disabled: disabled,
    type: type,
    icon: icon,
    placeholder: placeholder,
    value: value,
    readOnly: readOnly
  }, props)), icon === "SearchOutlined" && type === "icon" && ( /*#__PURE__*/React.createElement(SearchOutlined, {
    style: IconStyle
  })));
};
var templateObject_1$2, templateObject_2$2, templateObject_3$1;

var HiddenRadio = styled.input.attrs({
  type: "radio"
})(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  &:checked + label {\n    border-color: rgba(255, 255, 255, 0);\n    background-color: ", ";\n  }\n  &:checked + label > span {\n    visibility: visible;\n  }\n  &:disabled ~ label {\n    opacity: 0.5;\n  }\n"], ["\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  &:checked + label {\n    border-color: rgba(255, 255, 255, 0);\n    background-color: ", ";\n  }\n  &:checked + label > span {\n    visibility: visible;\n  }\n  &:disabled ~ label {\n    opacity: 0.5;\n  }\n"])), Colors.primary);
var VisibleRadio = styled.label(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  transition: 0.4s;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  &::before {\n    content: \"\";\n    position: absolute;\n    width: 0.6rem;\n    height: 0.6rem;\n    border-radius: 2px;\n    background-color: #fff;\n  }\n  span {\n    font-size: 1rem;\n    color: #fff;\n    visibility: hidden;\n  }\n"], ["\n  transition: 0.4s;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  &::before {\n    content: \"\";\n    position: absolute;\n    width: 0.6rem;\n    height: 0.6rem;\n    border-radius: 2px;\n    background-color: #fff;\n  }\n  span {\n    font-size: 1rem;\n    color: #fff;\n    visibility: hidden;\n  }\n"])), Colors.borderColor);
var RadioWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n  margin: 5px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n  margin: 5px;\n"])));
var RadioLabel = styled.label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 1rem;\n  padding-left: 6px;\n  cursor: pointer;\n"], ["\n  font-size: 1rem;\n  padding-left: 6px;\n  cursor: pointer;\n"])));
var Radio = function Radio(_a) {
  var disabled = _a.disabled,
    checked = _a.checked,
    name = _a.name,
    value = _a.value;
    _a.onChange;
  var changeHandler = function changeHandler(e) {
    console.log(e);
  };
  return value.map(function (val, i) {
    return /*#__PURE__*/React.createElement(RadioWrapper, null, /*#__PURE__*/React.createElement(HiddenRadio, {
      disabled: disabled,
      value: val,
      name: name,
      defaultChecked: checked && i == 0 ? true : false,
      onChange: changeHandler,
      id: val
    }), /*#__PURE__*/React.createElement(VisibleRadio, {
      htmlFor: val
    }), /*#__PURE__*/React.createElement(RadioLabel, {
      htmlFor: val
    }, val));
  });
};
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4;

var MultiLineInput = styled.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  outline: 0;\n  font-size: 1rem;\n  background-color: #f9f9f9;\n  border:none;\n  padding: 0.8rem 0.6rem;\n  flex: 1;\n  color: ", ";\n  resize: none;\n  ", ";\n"], ["\n  outline: 0;\n  font-size: 1rem;\n  background-color: #f9f9f9;\n  border:none;\n  padding: 0.8rem 0.6rem;\n  flex: 1;\n  color: ", ";\n  resize: none;\n  ", ";\n"])), Colors.text, function (props) {
  return props.disabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        opacity: 0.5;\n        cursor: default;\n      "], ["\n        opacity: 0.5;\n        cursor: default;\n      "])));
});
var Textarea = function Textarea(_a) {
  var _b = _a.placeholder,
    placeholder = _b === void 0 ? "텍스트를 입력해주세요." : _b,
    disabled = _a.disabled,
    readOnly = _a.readOnly,
    value = _a.value,
    props = __rest(_a, ["placeholder", "disabled", "readOnly", "value"]);
  return /*#__PURE__*/React.createElement(MultiLineInput, _assign({
    disabled: disabled,
    placeholder: placeholder,
    value: value,
    readOnly: readOnly
  }, props));
};
var templateObject_1, templateObject_2;

export { Button, CheckBox, Dropdown, Input, Radio, Textarea };
//# sourceMappingURL=bundle.js.map
