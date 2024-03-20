import React, { useEffect } from 'react'
const TestApp = () => {

  useEffect(() => {
    console.log('didmount')
  }, [])
  
  return (
    <p>hello</p>
  )
}

export default TestApp