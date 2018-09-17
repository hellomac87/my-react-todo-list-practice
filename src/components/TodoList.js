import React from 'react';
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

const TodoList = (props) => {
    
    const todos = props.todos;
    const todosList = todos.map((todoObj, index) => (
        <TodoItem 
        key={index}
        todo={todoObj.todo} 
        handleCheck={props.handleCheck}
        handleRemove={() => props.handleRemove(todoObj.id)}
        handleEdit={() => props.handleEdit(todoObj.id)}
        isEdit={todoObj.isEdit}/>
    ));
    // console.log("todosList : ",todosList);
    return (
        <div className="TodoList">
            {todosList}
        </div>
    );
};

TodoItem.propTypes = {
    handleCheck: propTypes.func,
};

TodoItem.defaultProps = {
    handleCheck: () => console.warn("handleCheck is not defined"),
};

export default TodoList;