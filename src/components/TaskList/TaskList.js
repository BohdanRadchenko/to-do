import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteId, getPrior }) => {
  return (
    <ul className={styles.list}>
      {tasks.map(el => (
        <li className={styles.item} key={el.id}>
          <Task {...el} deleteId={deleteId} getPrior={getPrior} />
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteId: PropTypes.func.isRequired,
  getPrior: PropTypes.func.isRequired,
};
export default TaskList;
