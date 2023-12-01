import css from '../Style.module.css';
import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <div className={css.span}>
    <span className={css.btnValueGood}>Good:{good}</span>
    <span className={css.btnValueNeutral}>Neutral:{neutral}</span>
    <span className={css.btnValueBad}>Bad:{bad}</span>
    <span>Total:{countTotalFeedback}</span>
    <span>Positive feedback:{countPositiveFeedbackPercentage}%</span>
  </div>
);

export default Statistics;
