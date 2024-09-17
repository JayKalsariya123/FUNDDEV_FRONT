import React from 'react';
import './HelpAndSupport.css';

const teamMembers = [
  { name: 'John Doe', role: 'Frontend Developer', email: 'john.doe@example.com', phone: '+1234567890' },
  { name: 'Jane Smith', role: 'Backend Developer', email: 'jane.smith@example.com', phone: '+1234567891' },
  { name: 'Sam Wilson', role: 'UI/UX Designer', email: 'sam.wilson@example.com', phone: '+1234567892' },
  { name: 'Lisa Ray', role: 'Product Manager', email: 'lisa.ray@example.com', phone: '+1234567893' },
  { name: 'Max Turner', role: 'DevOps Engineer', email: 'max.turner@example.com', phone: '+1234567894' },
  { name: 'Eva Green', role: 'QA Engineer', email: 'eva.green@example.com', phone: '+1234567895' }
];

const HelpSupportForm = () => {
  return (
    <div className="help-support-form">
      <div className="website-info">
        <h2>Welcome to Our Help and Support Center</h2>
        <p>We are here to assist you. If you have any questions, feel free to contact any of our team members listed below.</p>
        <p>You can also reach out to us for more details about our services or support inquiries.</p>
      </div>

      <div className="contact-details">
        <h3>Team Members</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <h4>{member.name}</h4>
              <p><strong>Role:</strong> {member.role}</p>
              <p><strong>Email:</strong> {member.email}</p>
              <p><strong>Phone:</strong> {member.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="extra-info">
        <h3>Other Information</h3>
        <p>For general inquiries, email us at <a href="mailto:support@example.com">support@example.com</a>.</p>
        <p>Our office is located at: 1234 Elm Street, Tech City, TC 56789.</p>
        <p>Phone: +1234567896 | Fax: +1234567897</p>
      </div>
    </div>
  );
};

export default HelpSupportForm;
