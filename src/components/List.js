import React from "react";

const List = (props) => {

    return (
        <ul className="list-container">
            {props.tasks.map((task) => {
                return <li className="list-item" key={task.task} id={task.task}>
                    {task.task}
                    <button className="delete-button" onClick={() => { props.deleteTask(task.task) }}><i className="fa fa-trash"></i></button>
                </li>;
            })}
        </ul>
    );
};

export default List;
