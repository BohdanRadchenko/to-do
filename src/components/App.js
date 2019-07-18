/*eslint-disable*/
import React, { Component } from 'react';
import shortid from 'short-id';
import Form from './Form/Form';
import TaskList from './TaskList/TaskList';
import styles from './App.module.css';
import Filter from './Filter/Filter';

const find = (arr, inputValue) => {
  return arr.filter(el =>
    el.title.toLowerCase().includes(inputValue.toLowerCase()),
  );
};

class App extends Component {
  state = {
    isOpen: true,
    mess: 'CLOSE',
    items: [],
    search: [],
    value: '',
  };

  componentDidMount() {
    if (localStorage.getItem('items')) {
      const store = localStorage.getItem('items');
      this.setState({
        items: JSON.parse(store),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const preLocal = this.state.items;
    const localJson = JSON.stringify(preLocal);
    localStorage.setItem('items', localJson);
  }

  getPrior = (id, priority) => {
    this.setState(state => ({
      items: state.items.map(el => (el.id === id ? { ...el, priority } : el)),
    }));
  };

  delete = id => {
    this.setState(state => ({
      items: state.items.filter(el => el.id !== id),
    }));
  };

  getTask = task => {
    const newArr = {
      id: shortid.generate(),
      date: new Date().toLocaleString(),
      ...task,
    };
    this.setState(state => ({
      items: [...state.items, newArr],
    }));
  };

  getSerch = ({ value }) => {
    this.setState({
      value: value,
    });
    this.setState(state => ({
      serch: state.items.filter(el =>
        el.title.toLowerCase().includes(value.toLowerCase()),
      ),
    }));
    // return items.filter(el =>
    //   el.title.toLowerCase().includes(value.toLowerCase()),
    // );
  };

  hendleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      mess: prevState.isOpen ? 'OPEN' : 'CLOSE',
    }));
  };

  render() {
    const { items, isOpen, mess, search, value } = this.state;
    const findWord = find(items, value);
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={this.hendleOpen}>
          {mess}
        </button>
        {isOpen && <Filter getSerch={this.getSerch} />}
        <Form getTask={this.getTask} />
        <TaskList
          tasks={findWord}
          deleteId={this.delete}
          getPrior={this.getPrior}
        />
      </div>
    );
  }
}

export default App;
