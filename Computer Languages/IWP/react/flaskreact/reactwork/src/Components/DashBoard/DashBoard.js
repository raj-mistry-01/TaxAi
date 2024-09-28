import React from 'react'
import Cookie from "js-cookie"

const gotoFlaskWithEmailId = async (emailId) => {
    
const gotoFlaskWithEmailId = async (emailId) => {
    try {
        const response = await fetch('http://127.0.0.1:5000/generateReport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailId }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data received from Flask:', data);
        // Handle the data received from Flask as needed
    } catch (error) {
        console.error('Error making API call:', error);
    }
};
};
function DashBoard() {
  return (
    <div>DashBoard
        <button> onclick={gotoFlaskWithEmailId("skjgjfhgj@gmail.com")}
            click Me
        </button>
    </div>
  )
}

export default DashBoard