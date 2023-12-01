import css from '../Style.module.css';
import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
