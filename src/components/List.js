import React from "react";

const List = (props) => {

    return (
        <ul className="list-container">
            {props.todos.map((todo) => {
                return <li className="list-item" key={todo.item} id={todo.item}>
                    {todo.item}
                    <button className="delete-button" onClick={() => { props.deleteToDo(todo.item) }}><i className="fa fa-trash"></i></button>
                </li>;
            })}
        </ul>
    );
};

export default List;
