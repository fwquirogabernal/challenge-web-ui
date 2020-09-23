import React, { createContext, useEffect, useState } from "react";
// TODO: Hacer la peticion al server.
// import Axios from "axios";

export const TasksContext = createContext();

const TasksProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      //LLenar cuando este el API
      //   const url = "";
      //   const tasks = await Axios.get(url);
      setTasks([
        { id: "1", desc: "desc1" },
        { id: "2", desc: "desc2" },
      ]);
    };
    getTasks();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks }}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;