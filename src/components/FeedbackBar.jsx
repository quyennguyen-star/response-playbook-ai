import React, { useState } from 'react';
import './FeedbackBar.css';

export const FeedbackBar = ({ onFeedback }) => {
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleSelect = (type) => {
    setSelected(type);
    if (onFeedback) {
      onFeedback({ type, text: null });
    }
  };

  const handleDeselect = () => {
    setSelected(null);
  };

  const handleSubmit = () => {
    if (onFeedback) {
      onFeedback({ type: selected, text: feedbackText });
    }
    setModalOpen(false);
    setFeedbackText('');
  };

  return (
    <div className="feedback-bar">
      {!selected ? (
        <div className="feedback-bar__buttons">
          <button
            className="feedback-bar__btn"
            onClick={() => handleSelect('up')}
            aria-label="Helpful"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </button>
          <button
            className="feedback-bar__btn"
            onClick={() => handleSelect('down')}
            aria-label="Not helpful"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
            </svg>
          </button>
        </div>
      ) : (
        <div className="feedback-bar__selected">
          <button
            className="feedback-bar__icon-btn"
            onClick={handleDeselect}
            aria-label="Deselect"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              {selected === 'up' ? (
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              ) : (
                <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
              )}
            </svg>
          </button>
          <button
            className="feedback-bar__add-btn"
            onClick={() => setModalOpen(true)}
          >
            Add Feedback
          </button>
        </div>
      )}

      {modalOpen && (
        <div className="feedback-modal">
          <div className="feedback-modal__content">
            <div className="feedback-modal__header">
              <h3>Feedback</h3>
              <button
                className="feedback-modal__close"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <label className="feedback-modal__label">What could have been better?</label>
            <textarea
              className="feedback-modal__textarea"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Share your feedback..."
            />
            <div className="feedback-modal__footer">
              <button
                className="feedback-modal__submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
