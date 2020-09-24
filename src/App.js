import React from "react";
import TodoList from "./components/TodoList";
import Form from "../src/components/Form";
import Header from "../src/components/Header";
import TasksProvider from "../src/contexts/TasksContext";
function App() {
  return (
    <TasksProvider>
      <Header />
      <div className="container mt-5 text-center">
        <div className="row">
          <Form />
        </div>
        <TodoList />
      </div>
    </TasksProvider>
  );
}

export default App;
