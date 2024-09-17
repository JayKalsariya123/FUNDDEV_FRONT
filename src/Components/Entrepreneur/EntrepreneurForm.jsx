import React, { useState } from 'react';
import './EntrepreneurForm.css';
import { useNavigate, useLocation } from 'react-router-dom';

const EntrepreneurForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType, firstname, lastname, username, email, password } = location.state;

  // Fields for the Entrepreneur form
  const fields = [
    { name: 'companyName', label: 'Company Name', type: 'text', optional: false },
    { name: 'foundedDate', label: 'Founded Date', type: 'date', optional: false },
    { name: 'teamSize', label: 'Team Size', type: 'number', optional: false },
    { name: 'industry', label: 'Industry', type: 'text', optional: false },
    { name: 'stage', label: 'Stage', type: 'select', options: ['Idea', 'Prototype', 'Early Stage', 'Growth', 'Mature'], optional: false },
    { name: 'pitchDeck', label: 'Pitch Deck (Optional)', type: 'file', optional: true },
    { name: 'bio', label: 'Bio (Optional)', type: 'textarea', optional: true },
    { name: 'location', label: 'Location (Optional)', type: 'text', optional: true },
    { name: 'website', label: 'Website (Optional)', type: 'text', optional: true },
    { name: 'linkedin', label: 'LinkedIn (Optional)', type: 'text', optional: true },
    { name: 'github', label: 'GitHub (Optional)', type: 'text', optional: true },
    { name: 'twitter', label: 'Twitter (Optional)', type: 'text', optional: true },
  ];

  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    // Log the collected information
    console.log('All Information:', {
      userType,
      firstname,
      lastname,
      username,
      email,
      password,
      ...formData,
    });
    // Redirect to the main page after submission
    navigate('/MainPage');
  };

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="entrepreneur-form">
      <h2>Entrepreneur Information</h2>
      {/* Render all input fields on the same page */}
      {fields.map((field, index) => (
        <div className="form-step" key={index}>
          <label>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea name={field.name} value={formData[field.name] || ''} onChange={handleChange} />
          ) : field.type === 'select' ? (
            <select name={field.name} value={formData[field.name] || ''} onChange={handleChange}>
              <option value="">-- Select --</option>
              {field.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              accept={field.type === 'file' ? '.pdf' : null}
            />
          )}
        </div>
      ))}
      {/* Submit Button */}
      <div className="form-buttons">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EntrepreneurForm;
