import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

const Task = ({ id, title, text, date, priority, deleteId, getPrior }) => {
  return (
    <div className={styles.container}>
      <select value={priority} onChange={e => getPrior(id, e.target.value)}>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="higth">Hight</option>
      </select>
      <button
        className={styles.button}
        type="button"
        onClick={() => deleteId(id)}
      />
      <p className={styles.id}>id: {id}</p>
      <p className={styles.date}>date: {date}</p>
      <p className={styles.title}>
        Title:
        <span> {title}</span>
      </p>
      <p className={styles.text}>
        Text:
        <span> {text}</span>
      </p>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  deleteId: PropTypes.func.isRequired,
  getPrior: PropTypes.func.isRequired,
};

export default Task;
