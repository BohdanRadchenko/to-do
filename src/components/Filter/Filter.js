import React from 'react';
import PropTypes from 'prop-types';
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

Filter.propTypes = {
  getSerch: PropTypes.func.isRequired,
};

export default Filter;
