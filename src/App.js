import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Store from './Store';
import './App.css';

class App extends Component {
  state = {
    todos: Store.getTodos()
  }

  deleteTodo = id => {
    Store.deleteTodo(id);

    this.setState({
      todos: Store.getTodos()
    })
  }

  addTodo = todo => {
    todo.id = Math.random();

    Store.addTodo(todo);
    this.setState({
      todos: Store.getTodos()

    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h2 className="center title-text">🍰 Todo List</h2>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <AddTodo addTodo={ this.addTodo }/>
        </div>
    );
  }
}

export default App;
