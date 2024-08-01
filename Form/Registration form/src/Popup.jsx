import React from 'react';
import './App.css';

function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Popup;
