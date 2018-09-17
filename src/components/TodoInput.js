import React from 'react';
import propTypes from 'prop-types'

const TodoInput = (props) => {
    return (
        <form className="TodoInput-Wrap" onSubmit={props.handleSubmit}>
            <input type="text" value={props.value} onChange={props.handleInput} />
            <button type="submit">add</button>
        </form>
    );
};

TodoInput.propTypes = {
    handleInput : propTypes.func,
    handleSubmit: propTypes.func,
};

TodoInput.defaultProps = {
    handleInput: () => console.warn("handleInput is not defined"),
    handleSubmit: () => console.warn("handleSubmit is not defined"),
};


export default TodoInput;