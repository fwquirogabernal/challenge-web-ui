import React, { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

const Task = ({ task, checked }) => {
  // Context
  const { editTask, saveTask } = useContext(TasksContext);

  // States
  const [edit, enableEdit] = useState(false);
  const [taskEdited, modifyTask] = useState(task);
  const clicked = (task) => {
    enableEdit(true);
  };

  const edited = (task) => {
    enableEdit(false);
    if (task.description.trim() === taskEdited.description.trim())
      return saveTask(false);

    task.description = taskEdited.description;
    saveTask(true);
    editTask(task);
  };

  const onEdit = (e) => {
    modifyTask({
      ...taskEdited,
      [e.target.name]: e.target.value,
    });
  };

  const onChecked = (e) => {
    checked(task, e.target.checked);
  };

  return (
    <div>
      <fieldset>
        <div className="form-check text-left">
          <div className="row">
            <label className="form-check-label">
              <div className="col-1">
                <input
                  type="checkbox"
                  name="selected"
                  className="form-check-input"
                  onChange={onChecked}
                  disabled={task.isCompleted}
                />
              </div>
            </label>
            {!edit ? (
              <div className="col-11">
                <div className="row">
                  <div className="col-11">
                      <p className={task.isCompleted ? "tachado_rojo": ""}>
                      {task.description}
                      </p>
                      </div>
                  {
                    task.isCompleted ? null :
                    (
                      <div className="col-1">
                    <span
                      className="badge badge-info"
                      onClick={() => clicked(task)}
                    >
                      Modificar
                    </span>
                  </div>
                    )
                  }
                </div>
              </div>
            ) : (
              <div className="col-11">
                <div className="row">
                  <div className="col-11">
                    <div className="form-group">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="description"
                        value={taskEdited.description}
                        id="inputSmall"
                        onChange={onEdit}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <span
                      className="badge badge-primary"
                      onClick={() => edited(task)}
                    >
                      Guardar
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Task;
