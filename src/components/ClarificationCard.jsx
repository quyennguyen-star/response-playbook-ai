import React from 'react';
import './ClarificationCard.css';

export const ClarificationCard = ({
  title = 'Clarification',
  description = 'Narrows broad, ambiguous, or incomplete requests before choosing a response pattern.',
  imageSrc,
  onReview,
}) => {
  return (
    <div className="clarification-card">
      {imageSrc && (
        <div className="clarification-card__image">
          <img src={imageSrc} alt={title} />
        </div>
      )}
      <div className="clarification-card__body">
        <div className="clarification-card__title">{title}</div>
        <div className="clarification-card__desc">{description}</div>
        {onReview && (
          <button className="clarification-card__btn" onClick={onReview}>
            Review
          </button>
        )}
      </div>
    </div>
  );
};
