import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-around w-full h-12 bg-lime-200"
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
    >
      <div className="">
        <h1 className="text-3xl font-bold text-white">Todo App</h1>
      </div>
      <div className="flex gap-5 items-center">
        <Link to="/" className="  px-2 py-1 rounded-lg bg-cyan-500">
          Home
        </Link>
        <Link to="/add-todo" className=" px-2 py-1 rounded-lg bg-cyan-500">
          Add Todo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
