import React, { useState } from 'react';
import './ClarificationCard.css';

export const ClarificationCard = ({
  question = 'What would you like to do?',
  options = [],
  onSelect,
  selected: controlledSelected,
}) => {
  const [internalSelected, setInternalSelected] = useState(null);
  const selected = controlledSelected !== undefined ? controlledSelected : internalSelected;

  const handleSelect = (option) => {
    setInternalSelected(option.value);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="clarification-card">
      <div className="clarification-card__body">
        <div className="clarification-card__question">{question}</div>
        <div className="clarification-card__options">
          {options.map((option) => (
            <button
              key={option.value}
              className={`clarification-card__option${selected === option.value ? ' clarification-card__option--selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
        {selected && (
          <div className="clarification-card__confirm">
            <span className="clarification-card__confirm-text">
              {options.find(o => o.value === selected)?.label}
            </span>
            <button
              className="clarification-card__confirm-btn"
              onClick={() => { setInternalSelected(null); if (onSelect) onSelect(null); }}
            >
              Change
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
