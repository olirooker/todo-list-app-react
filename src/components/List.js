import React from "react";

const List = ({ todos, deleteToDo, toggleIsCompleted }) => {

    return (
        <ul className="list-container">
            {todos.map((todo) => {
                return <li className="list-item" key={todo.item} id={todo.item} onClick={() => { toggleIsCompleted(todo.item) }}>
                    <i class="fa fa-square-o"></i>
                    {todo.item}
                    <button className="delete-button" onClick={() => { deleteToDo(todo.item) }}><i className="fa fa-trash"></i></button>
                </li>;
            })}
        </ul >
    );
};

export default List;
