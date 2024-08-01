import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Popup from './Popup';

function RegistrationForm() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      dob: '',
      tshirtSize: []
    });
  
    const [error, setError] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    // const handleCheckboxChange = (e) => {
    //     const { value, checked } = e.target;
    //     setFormData((prevState) => {
    //       const tshirtSizes = checked
    //         ? [...prevState.tshirtSizes, value]
    //         : prevState.tshirtSizes.filter((size) => size !== value);
    //       return { ...prevState, tshirtSizes };
    //     });
    //   };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.tshirtSize.length ===0) {
        setError('Please select a t-shirt size.');
        return;
      }
  
      setError('');
      setPopupMessage('Registration success');
    };
  
    const handleClosePopup = () => {
      localStorage.setItem('userData', JSON.stringify(formData));
      navigate('/success');
    };  
  return (
    <div className="container">
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <div>
            <label cont="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            <label cont="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <label cont="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label cont="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

        {/* <label cont="country">Country:</label>
        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required /> */}

<select id="country" name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select your country</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>        </select>

        <label cont="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />

        <fieldset>
          <legend>T-shirt Size:</legend>
          <div>
            <input type="radio" id="small" name="tshirtSize" value="Small" onChange={handleChange} />
            <label cont="small">Small</label>
          </div>
          <div>
            <input type="radio" id="medium" name="tshirtSize" value="Medium" onChange={handleChange} />
            <label cont="medium">Medium</label>
          </div>
          <div>
            <input type="radio" id="large" name="tshirtSize" value="Large" onChange={handleChange} />
            <label cont="large">Large</label>
          </div>
          <div>
            <input type="radio" id="xlarge" name="tshirtSize" value="X-Large" onChange={handleChange} />
            <label cont="xlarge">X-Large</label>
          </div>
        </fieldset>
        
        <div>
        {/* <input type="checkbox" onChange={handleCheckboxChange} /> */}
            <label cont="agree">I agree to the terms and conditions of this event</label>
        </div>

        <button type="submit">Register Now</button>
      </form>
      {popupMessage && <Popup message={popupMessage} onClose={handleClosePopup} />}

    </div>
  );
}


export default RegistrationForm;
