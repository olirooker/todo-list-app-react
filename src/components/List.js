import React from "react";

const List = (props) => {

    return (
        <ul class="list-container">
            {props.tasks.map((task) => {
                return <li class="list-item" key={task.task} id={task.task}>
                    {task.task}
                    <button class="delete-button" onClick={() => { props.deleteTask(task.task) }}><i class="fa fa-trash"></i></button>
                </li>;
            })}
        </ul>
    );
};

export default List;
