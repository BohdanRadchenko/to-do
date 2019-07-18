/*eslint-disable */
import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ getSerch }) => {
  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.input}
          onChange={e => getSerch(e.target)}
          type="text"
        />
      </form>
    </>
  );
};

export default Filter;
