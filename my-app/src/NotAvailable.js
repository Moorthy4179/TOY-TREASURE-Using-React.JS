import React from 'react';
import { useLocation } from 'react-router-dom';

const NotAvailable = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  return (
    <div>
      <h1>Not Available</h1>
      <p>Sorry, "{query}" is not available.</p>
    </div>
  );
};

export default NotAvailable;
