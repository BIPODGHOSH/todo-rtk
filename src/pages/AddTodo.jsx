import React, { useState } from "react";
import { add } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todos, setTodos] = useState({
    id: 0,
    name: "",
    discription: "",
    isComplite: false,
    currentDate: "",
    ExpectedDate: "",
  });

  function currentDate() {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, "0"); // Add leading zero if less than 10
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yr = date.getFullYear();
    const current = `${dd}/${mm}/${yr}`;
    return current;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodos({
      ...todos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      todos.name === "" ||
      todos.discription === "" ||
      todos.ExpectedDate === ""
    ) {
      alert("Please fill in all the fields ");
      return;
    }

    const updatedTodos = {
      ...todos,
      isComplite: false,
      currentDate: currentDate(),
    };

    dispatch(add(updatedTodos));
    navigate("/");
  };

  return (
    <form className="flex flex-col w-[90vw] items-center gap-2 outline-none p-5">
      <input
        type="text"
        placeholder="Enter Name"
        value={todos.name}
        name="name"
        onChange={handleInputChange}
        className=" outline-none px-3 py-1 w-52 rounded-lg"
      />
      <input
        type="text"
        placeholder="Enter Todo"
        value={todos.discription}
        name="discription"
        onChange={handleInputChange}
        className=" outline-none px-3 py-1 w-52 rounded-lg"
      />
      <input
        type="date"
        value={todos.ExpectedDate}
        name="ExpectedDate"
        onChange={handleInputChange}
        className=" outline-none px-3 py-1 w-52 rounded-lg"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className=" px-3 py-1 bg-blue-500 rounded-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
