import React from 'react';
import { useNavigate } from 'react-router-dom';  

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');  
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};

export default About;
