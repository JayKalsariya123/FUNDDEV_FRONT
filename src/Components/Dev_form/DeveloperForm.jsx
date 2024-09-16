import React, { useState } from 'react';
import './DeveloperForm.css';
import { useNavigate ,useLocation} from 'react-router-dom';

const DeveloperForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const { userType, firstname, lastname, username, email , password } = location.state;
  
  const steps = [
    { name: 'bio', label: 'Bio', type: 'textarea', optional: true },
    { name: 'location', label: 'Location', type: 'text', optional: true },
    { name: 'website', label: 'Website', type: 'text', optional: true },
    { name: 'linkedin', label: 'LinkedIn', type: 'text', optional: true },
    { name: 'github', label: 'GitHub', type: 'text', optional: true },
    { name: 'twitter', label: 'Twitter', type: 'text', optional: true },
    { name: 'skills', label: 'Skills', type: 'text', optional: false },
    { name: 'experience', label: 'Experience (in years)', type: 'number', optional: false },
    { name: 'availability', label: 'Availability', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Not Available'], optional: false },
    { name: 'preferredRoles', label: 'Preferred Roles', type: 'select', options: ['Frontend', 'Backend', 'Full-stack', 'Mobile', 'AI/ML', 'DevOps', 'Other'], optional: false },
    { name: 'hourlyRate', label: 'Hourly Rate ($)', type: 'number', optional: false },
    { name: 'remote', label: 'Remote Work', type: 'checkbox', optional: false },
    { name: 'portfolio', label: 'Portfolio (Title, Description, Link)', type: 'text', optional: true },
    { name: 'resume', label: 'Upload Resume', type: 'file', optional: false }
  ];
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

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

  const handleSkip = () => {
    handleNext();
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

  const renderStep = () => {
    const step = steps[currentStep];
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
    <div className="developer-form">
      <h2>Developer Information</h2>
      <div className="form-step">
        <label>{steps[currentStep].label}</label>
        {renderStep()}
      </div>
      <div className="form-buttons">
        {currentStep < steps.length - 1 ? (
          <>
            <button onClick={handleSkip}>Skip</button>
            <button onClick={handleNext}>Next</button>
          </>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default DeveloperForm;
