import React, { useEffect } from 'react';
const TestApp = () => {
    useEffect(() => {
        console.log('didmount');
    }, []);
    return (React.createElement("p", null, "hello"));
};
export default TestApp;
