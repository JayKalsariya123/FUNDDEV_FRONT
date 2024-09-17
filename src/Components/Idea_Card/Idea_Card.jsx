import React from 'react';

const IdeaCard = ({ title, theme, category, budget, likes, comments, rating }) => {
  // Define styles for the card
  const cardStyle = {
    width: '100%',
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '24px',
    margin: '16px auto',
    backgroundColor: '#1e1e1e',
    color: '#e0e0e0',
    boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
    boxSizing: 'border-box',
    minHeight: '220px',
    textAlign: 'left',
  };

  const titleStyle = {
    fontSize: '1.8em',
    marginBottom: '16px',
    fontWeight: 'bold',
  };

  const detailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const fieldStyle = {
    fontSize: '1em',
  };

  const statsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1em',
    borderTop: '1px solid #333',
    paddingTop: '16px',
    marginTop: '16px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={detailsStyle}>
        <div style={fieldStyle}><strong>Theme:</strong> {theme}</div>
        <div style={fieldStyle}><strong>Category:</strong> {category}</div>
        <div style={fieldStyle}><strong>Budget:</strong> {budget}</div>
      </div>
      <div style={statsStyle}>
        <span>👍 {likes} Likes</span>
        <span>💬 {comments} Comments</span>
        <span>⭐ {rating}/5 Rating</span>
      </div>
    </div>
  );
};

const App = () => {
  const ideas = [
    {
      title: "Innovative App Idea",
      theme: "Technology",
      category: "Software",
      budget: "$1000",
      likes: 123,
      comments: 45,
      rating: 4.5
    },
    {
      title: "Sustainable Energy Solution",
      theme: "Environment",
      category: "Renewable Energy",
      budget: "$5000",
      likes: 200,
      comments: 67,
      rating: 4.7
    },
    {
      title: "Educational Platform",
      theme: "Education",
      category: "Online Learning",
      budget: "$2000",
      likes: 340,
      comments: 120,
      rating: 4.9
    },
  ];

  return (
    <div style={{ padding: '16px' }}>
      {ideas.map((idea, index) => (
        <IdeaCard key={index} {...idea} />
      ))}
    </div>
  );
};

export default App;
