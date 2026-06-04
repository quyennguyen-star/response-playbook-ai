import React from 'react';
import './ResponseLabel.css';

export const ResponseLabel = ({ children, type = 'default' }) => {
  return (
    <div className={`response-label response-label--${type}`}>
      {children}
    </div>
  );
};
