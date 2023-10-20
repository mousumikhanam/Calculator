import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
import TodoList from "./components/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Calculator />} />
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
