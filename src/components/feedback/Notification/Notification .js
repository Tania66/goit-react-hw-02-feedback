import React from 'react';
import css from '../Style.module.css';

const Notification = ({ message }) => {
  return (
    <div className={css.title}>
      <h3>{message}</h3>
    </div>
  );
};

export default Notification;
