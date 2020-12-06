import React from "react";

const List = ({ todos, deleteToDo, toggleIsCompleted }) => {

    return (
        <ul className="list-container">
            {todos.map((todo) => {
                return <li key={todo.item} id={todo.item} className="list-element-container">
                    <i className={todos.isCompleted ? "fa fa-check-square" : "fa fa-square-o"}></i>
                    <p className={todos.isCompleted ? "completed-list-item" : "list-item"} onClick={() => { toggleIsCompleted(todo.item) }}>{todo.item}</p>
                    <button className="delete-button" onClick={() => { deleteToDo(todo.item) }}><i className="fa fa-trash"></i></button>
                </li>;
            })}
        </ul >
    );
};

export default List;
