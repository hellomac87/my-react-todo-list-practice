import React from 'react';

const TodoItem = (props) => {
    console.log("todoitem props : ", props)
    return (
        <div className="TodoItem">
            <input 
            onClick={() => console.log(props.todo)}
            type="checkbox" 
            done={props.done}
            />
            <label>{props.todo}</label>
        </div>
    );
};

export default TodoItem;