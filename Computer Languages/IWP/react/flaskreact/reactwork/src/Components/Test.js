import React from 'react'

function Test() {
  const generateReport = async () => {
    let response = await fetch("http://127.0.0.1:5000/generateReport",{
      method : "GET",
    })
  }
  return (
    <div>
      Test
      <button onclick = {generateReport}>Click me</button>
    </div>
  )
}

export default Test