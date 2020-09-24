import React, { Fragment, useContext, useState } from "react";
import Task from "../components/Task";
import { TasksContext } from "../contexts/TasksContext";

const TodoList = () => {
  //Context
  const { tasks, saveTask, deleteTasks, editTasks, error } = useContext(
    TasksContext
  );

  //States
  const [tar, updateTares] = useState([]);

  const hasTareas = tasks && tasks.length > 0;
  const message = hasTareas ? "Tareas pendientes" : "No hay tareas pendientes";

  const deleteAllSelected = () => {
    console.log(tar);
    if (tar && tar.length === 0) return saveTask(false);

    saveTask(true);
    deleteTasks(tar);
  };

  const checked = (task, checked) => {
    if (checked) {
      addTask(task);
    } else {
      removeTask(task);
    }
  };

  const completeAllSelected = () => {
    if (tar && tar.length === 0) return saveTask(false);
    tar.forEach((t) => {
      t.isCompleted = true;
    });
    saveTask(true);
    editTasks(tar);
    updateTares([]);
  };

  const addTask = (task) => {
    let aux = [];
    tar.forEach((t) => aux.push(t));
    aux.push(task);
    updateTares(aux);
  };
  const removeTask = (task) => {
    let aux = [];
    tar.forEach((t) => {
      if (t.id !== task.id) {
        aux.push(t);
      }
    });
    updateTares(aux);
  };

  return (
    <Fragment>
      {error !== "" ? (
        <div className="alert alert-dismissible alert-danger">
          <strong>{error}</strong>
        </div>
      ) : (
        <div className="container">
          <h2> {message}</h2>
          {tasks.map((t) => {
            if (t && !t.isDeleted) {
              return <Task key={t.id} task={t} checked={checked} />;
            }
            return null;
          })}
          {!hasTareas ? null : (
            <div className="row mt-4 justify-content-end">
              <div className="col-1 mr-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteAllSelected}
                >
                  Borrar
                </button>
              </div>
              <div className="col-1 ml-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={completeAllSelected}
                >
                  Completar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default TodoList;
