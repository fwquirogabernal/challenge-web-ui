import React, { useContext } from "react";
import Task from "../components/Task";
import { TasksContext } from "../contexts/TasksContext";

const TodoList = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="row mt-5">
      {tasks.map((t) => {
        if (t) {
          return <Task key={t.id} task={t} />;
        }
        return null;
      })}
    </div>
  );
};

export default TodoList;
