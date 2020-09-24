import React, { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

const Form = () => {
  //Context
  const { tasks, setTask, saveTask } = useContext(TasksContext);
  //States
  const [task, newTask] = useState({ description: "", codigo: 0 });

  const setData = (e) => {
    newTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (task.description === "" || task.description.length === 0)
      return saveTask(false);
    task.codigo = tasks.length === 0 ? 1 : tasks[tasks.length - 1].codigo + 1;
    saveTask(true);
    setTask(task);
    newTask({ description: "", codigo: 0 });
  };

  return (
    <form className="col-12" onSubmit={onSubmit}>
      <div className="row mb-4">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Ingrese tarea"
            onChange={setData}
            value = {task.description}
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Agregar"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
