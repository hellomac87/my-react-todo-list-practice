import React from 'react';

const TodoItem = (props) => {
    // console.log("todoitem props : ", props)
    return (
        <div className="TodoItem">
            <label>
                <input 
                onClick={() => console.log("click todo item!")}
                type="checkbox" 
                done={props.done}
                />
                {props.todo}
            </label>
            <button 
                onClick={() => console.log("click remove btn!")}
            >
            remove
            </button>
        </div>
    );
};

export default TodoItem;