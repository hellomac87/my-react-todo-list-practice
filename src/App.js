import React, { Component } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        todo: "todo todo todo",
        done: null,
      },
      {
        id: 2,
        todo: "todo2 todo2 todo2",
        done: null,
      },
      {
        id: 3,
        todo: "todo3 todo3 todo3",
        done: null,
      }
    ]
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} />
        <TodoInput />
      </div>
    );
  }
}

export default App;
