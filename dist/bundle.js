import React, { useEffect } from 'react';

var TestApp = function TestApp() {
  useEffect(function () {
    console.log('didmount');
  }, []);
  return /*#__PURE__*/React.createElement("p", null, "hello");
};

export { TestApp as default };
//# sourceMappingURL=bundle.js.map
