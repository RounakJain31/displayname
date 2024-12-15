import './App.css';
import React, { useState } from 'react';

function App() {
  // State variables for first name, last name, and full name
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`); // Set full name
    } else {
      alert("Both fields are required!");
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display the full name if it's set */}
      {fullName && (
        <div>
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
