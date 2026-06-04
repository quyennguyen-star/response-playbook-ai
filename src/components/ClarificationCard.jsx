import React from 'react';
import './ClarificationCard.css';

export const ClarificationCard = ({ imageSrc }) => {
  return (
    <div className="clarification-card">
      {imageSrc && (
        <div className="clarification-card__image">
          <img src={imageSrc} alt="" />
        </div>
      )}
    </div>
  );
};
