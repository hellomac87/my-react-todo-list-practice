import React from 'react';
import propTypes from "prop-types";

const TodoItem = (props) => {
    // console.log("todoitem props : ", props)
    return (
        <div className="TodoItem">
            <label>
                <input
                onClick={props.handleCheck}
                type="checkbox"
                />
            </label>
            <span className="todo-content">
            {
                props.isEdit ? (<input placeholder={props.todo}/>) : props.todo 
            }
            </span>
            <button 
                onClick={props.handleRemove}>
                remove
            </button>
            <button
                onClick={props.handleEdit}>
                edit
            </button>
        </div>
    );
};

TodoItem.propTypes = {
    handleCheck: propTypes.func,
};

TodoItem.defaultProps = {
  handleCheck: () => console.warn("handleCheck is not defined"),
};

export default TodoItem;