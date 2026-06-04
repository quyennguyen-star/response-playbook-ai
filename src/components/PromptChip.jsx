import React from 'react';
import './PromptChip.css';

export const PromptChip = ({ children, onClick }) => {
  return (
    <button className="prompt-chip" onClick={onClick}>
      {children}
    </button>
  );
};
