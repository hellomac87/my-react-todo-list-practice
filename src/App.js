import React, { Component } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  state = {
    value: "",
    isToggleOn: true,
    todos: [
      {
        id: 1,
        todo: "todo todo todo",
        isEdit: false,
      },
      {
        id: 2,
        todo: "todo2 todo2 todo2",
        isEdit: false,
      },
      {
        id: 3,
        todo: "todo3 todo3 todo3",
        isEdit: false,
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
        todo: this.state.value
      }),
      value: ""
    });
  }

  handleEdit(id) {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    todos[index].isEdit = !todos[index].isEdit
    this.setState({
      todos: todos
    });

    console.log(this.state.todos[index].isEdit);
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // slice 전후로 데이터들을 복사하고, 우리가 찾은 index는 제외시킵니다
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList
          todos={this.state.todos}
          handleEdit={this.handleEdit}
          handleRemove={this.handleRemove}
        />
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
