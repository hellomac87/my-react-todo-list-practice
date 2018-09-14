import React, { Component } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    value: "",
    isToggleOn: true,
    todos: [
      {
        id: 1,
        todo: "todo todo todo",
        done: null
      },
      {
        id: 2,
        todo: "todo2 todo2 todo2",
        done: null
      },
      {
        id: 3,
        todo: "todo3 todo3 todo3",
        done: null
      }
    ]
  };

  handleInput(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const todos = this.state.todos;
    const lastIndexId = this.state.todos.length + 1;

    this.setState({
      todos: todos.concat({
        id: lastIndexId,
        todo: this.state.value,
        done: null
      }),
      value: ""
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} />
        <TodoInput
          value={this.state.value}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
