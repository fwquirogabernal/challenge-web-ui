import React, { createContext, useEffect, useState } from "react";
// TODO: Hacer la peticion al server.
import Axios from "axios";

export const TasksContext = createContext();

const TasksProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ description: "", codigo: 0 });
  const [save, saveTask] = useState(false);
  const [taskToEdit, editTask] = useState({});
  const [tasksToEdit, editTasks] = useState({});
  const [tasksToDelet, deleteTasks] = useState({});
  const [error, setError ]= useState('');

  const apiUrl = "http://localhost:5000/api/task/";
  const getTasks = async () => {
    const url = apiUrl + "getall";
    const response = await Axios.get(url).catch(e => {
      setError(e.message);
    });
    setTasks(response.data);
  };
  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    if (save) {
      const newTask = async () => {
        const url = apiUrl + "newtask";
        const headers = {
          "Content-Type": "application/json",
        };
        await Axios.post(url, task, headers).catch(e => {
          setError(e.message);
        });
        getTasks();
      };
      newTask();
    }
  }, [task]);

  useEffect(() => {
    const editedTask = async () => {
      if (save) {
        const url = apiUrl + "updatetask";
        const headers = {
          "Content-Type": "application/json",
        };
        await Axios.post(url, taskToEdit, headers).catch(e => {
          setError(e.message);
        });
      }
    };
    editedTask();
  }, [taskToEdit]);
  
  useEffect(() => {
    const editedTask = async () => {
      if (save) {
        const url = apiUrl + "updatetasks";
        const headers = {
          "Content-Type": "application/json",
        };
        await Axios.post(url, tasksToEdit, headers).catch(e => {
          setError(e.message);
        });
        getTasks();

       }
    };
    editedTask();
  }, [tasksToEdit]);

  useEffect(() => {
    const delTasks = async () => {
      if (save) {
        const url = apiUrl + "deletetasks";
        const headers = {
          "Content-Type": "application/json",
        };
        await Axios.post(url, tasksToDelet, headers).catch(e => {
          setError(e.message);
        });
        getTasks();
      }
    };
    delTasks();
  }, [tasksToDelet]);

  return (
    <TasksContext.Provider
      value={{ tasks, setTask, saveTask, editTask, deleteTasks, editTasks, error }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
