import React from 'react';
import './App.css';

function SuccessPage() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className="container">
      <h1>Registration Success</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Date of Birth</th>
            <th>T-shirt Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userData.firstName}</td>
            <td>{userData.lastName}</td>
            <td>{userData.email}</td>
            <td>{userData.phone}</td>
            <td>{userData.country}</td>
            <td>{userData.dob}</td>
            <td>{userData.tshirtSize}</td>
            {/* <td>{userData.tshirtSize.join(', ')}</td> */}

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SuccessPage;
