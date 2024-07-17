import React from "react";
import { ITask } from "../interfaces";

interface Props {
    task: ITask;
}

const TodoTask = ({ task }: Props) => {
    return <div>{task.taskName}</div>
}

export default TodoTask