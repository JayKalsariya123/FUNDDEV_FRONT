import React, { useState } from 'react';
import './InvestorForm.css';
import { useNavigate, useLocation } from 'react-router-dom';

const InvestorForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType, firstname, lastname, username, email, password } = location.state;

  const steps = [
    { name: 'firmName', label: 'Firm Name', type: 'text', optional: false },
    { name: 'investmentRangeMin', label: 'Investment Range (Min)', type: 'number', optional: false },
    { name: 'investmentRangeMax', label: 'Investment Range (Max)', type: 'number', optional: false },
    { name: 'portfolioSize', label: 'Portfolio Size', type: 'number', optional: false },
    { name: 'preferredStages', label: 'Preferred Stages', type: 'select', options: ['Idea', 'Prototype', 'Early Stage', 'Growth', 'Mature'], optional: false },
    { name: 'preferredIndustries', label: 'Preferred Industries', type: 'text', optional: false },
    { name: 'investmentHistory', label: 'Investment History', type: 'textarea', optional: false },
    { name: 'bio', label: 'Bio', type: 'textarea', optional: true },
    { name: 'location', label: 'Location', type: 'text', optional: true },
    { name: 'website', label: 'Website', type: 'text', optional: true },
    { name: 'linkedin', label: 'LinkedIn', type: 'text', optional: true },
    { name: 'github', label: 'GitHub', type: 'text', optional: true },
    { name: 'twitter', label: 'Twitter', type: 'text', optional: true }
  ];

  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    console.log('All Information:', {
      userType,
      firstname,
      lastname,
      username,
      email,
      password,
      ...formData
    });
    navigate('/MainPage');
  };

  const handleChange = (e) => {
    const { name, type, files, value, checked } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const renderStep = (step) => {
    switch (step.type) {
      case 'textarea':
        return <textarea name={step.name} value={formData[step.name] || ''} onChange={handleChange} />;
      case 'select':
        return (
          <select name={step.name} value={formData[step.name] || ''} onChange={handleChange}>
            <option value="">-- Select --</option>
            {step.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'checkbox':
        return <input type="checkbox" name={step.name} checked={formData[step.name] || false} onChange={handleChange} />;
      case 'file':
        return <input type="file" name={step.name} onChange={handleChange} />;
      default:
        return <input type={step.type} name={step.name} value={formData[step.name] || ''} onChange={handleChange} />;
    }
  };

  return (
    <div className="investor-form">
      <h2>Investor Information</h2>
      {steps.map(step => (
        <div key={step.name} className="form-step">
          <label>{step.label}</label>
          {renderStep(step)}
        </div>
      ))}
      <div className="form-buttons">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default InvestorForm;
