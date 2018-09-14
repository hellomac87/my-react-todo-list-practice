import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    
    const todos = props.todos;
    const todosList = todos.map(todoObj => (
      <TodoItem key={todoObj.id} todo={todoObj.todo} done={todoObj.done}/>
    ));
    // console.log("todosList : ",todosList);
    return (
        <div className="TodoList">
            {todosList}
        </div>
    );
};

export default TodoList;