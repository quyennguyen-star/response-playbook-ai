import React from 'react';
import './AIThinking.css';

export const AIThinking = ({ text = 'Thinking...' }) => {
  return (
    <div className="ai-thinking">
      <div className="ai-thinking__dots">
        <div className="ai-thinking__dot ai-thinking__dot--1"></div>
        <div className="ai-thinking__dot ai-thinking__dot--2"></div>
        <div className="ai-thinking__dot ai-thinking__dot--3"></div>
      </div>
      <div className="ai-thinking__text">{text}</div>
    </div>
  );
};
