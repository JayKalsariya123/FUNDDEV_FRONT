import React, { useState } from 'react';
import './Idea_Form.css';

const IdeaForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState('hardware');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const ideaData = {
      title,
      description,
      theme,
      category,
      budget,
      
    };
    console.log(ideaData);
  };

  return (
    <div className="idea-form-container">
      <h2>Submit Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter idea title"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your idea"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Theme</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} required>
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
          </select>
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Blockchain, Agriculture, etc."
            required
          />
        </div>

        <div className="form-group">
          <label>Expected Budget ($)</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter expected budget"
            required
          />
        </div>

       

        <button type="submit" className="submit-btn">Submit Idea</button>
      </form>
    </div>
  );
};

export default IdeaForm;
