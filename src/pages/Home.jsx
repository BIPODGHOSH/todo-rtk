import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { remove, update } from "../store/todoSlice";
import { Link } from "react-router-dom";

const Home = () => {
  // Accessing todos from the Redux store state
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todos;
  });

  const handleToggle = (id) => {
    dispatch(
      update({
        id: id,
        toggle: true,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 5) {
      return words.slice(0, 5).join(" ") + "...";
    } else {
      return description;
    }
  };

  return (
    <div className="flex flex-col items-center text-white pt-2">
      <h1 className="text-2xl md:text-3xl">Todo List</h1>
      <ul className="flex flex-col gap-2 pt-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className=" bg-slate-800 flex w-[90vw] rounded-md p-2 justify-between"
          >
            <Link to="/todo-details" state={{ todo }}>
              <div
                className={`${
                  todo.isComplite ? "text-slate-300 line-through" : "text-white"
                } w-[55vw] md:w-[70vw]`}
              >
                <h1 className="text-2xl">{todo?.name}</h1>
                <h4 className="text-lg">
                  {truncateDescription(todo?.discription)}
                </h4>
              </div>
            </Link>
            <div className=" flex  items-center justify-between">
              {!todo.isComplite && (
                <button
                  className="px-3 py-1 bg-white text-blue-800 font-bold rounded-lg h-10"
                  onClick={() => handleToggle(todo.id)}
                >
                  Complite
                </button>
              )}
              <MdDelete
                color="white"
                size="30px"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
