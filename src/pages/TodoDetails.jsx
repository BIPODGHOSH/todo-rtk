import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const TodoDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const todo = location.state.todo;

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-800 rounded-lg shadow-md w-[90vw]">
      <h1 className="text-2xl font-bold text-white mb-4">{todo?.name}</h1>
      <p className="text-white mb-4">{todo?.discription}</p>
      <p className="text-gray-400 mb-4">
        {todo.isComplite ? "Completed" : "Not Completed"}
      </p>
      <p className="text-gray-400 mb-4">Added Date: {todo?.currentDate}</p>
      <p className="text-gray-400 mb-4">
        Expected Date to complite: {todo?.ExpectedDate}
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};

export default TodoDetails;
