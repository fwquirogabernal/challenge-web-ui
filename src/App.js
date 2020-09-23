import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TasksProvider from "../src/contexts/TasksContext";

function App() {
  return (
    <TasksProvider>
      <div>
        <TodoList />
      </div>
    </TasksProvider>
  );
}

export default App;
