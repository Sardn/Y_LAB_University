import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Welcome to my application</h1>
      <Link to="/login">Registration</Link>
    </>
  );
};

export default Home;
