import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import SuccessPage from './SuccessPage';
import Popup from './Popup';
// import App from "./App"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/success" element={<SuccessPage />} />
        {/* <Route path="/App" element={<App />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
