import React from 'react';

const Task = ({task}) => {
    return(
    <ul>{task.id} {task.desc}</ul>
    )
}

export default Task;