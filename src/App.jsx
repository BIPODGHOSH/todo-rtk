import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import TodoDetails from "./pages/TodoDetails";
import Navbar from "./components/Navbar";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
    <div className="bg-slate-500 h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-details" element={<TodoDetails />} />
        <Route path="/add-todo" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
