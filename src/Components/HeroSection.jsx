import React, { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now() + Math.random(), text: input, completed: false },
      ]);
      setInput("");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-violet-900 flex justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1.5,
          stiffness: 100,
          damping: 25,
          delay: 0.5,
        }}
        className="
          w-full 
          max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
          p-5 
          bg-gradient-to-t from-black to-violet-900 
          border-2 border-gray-500 
          shadow-xl shadow-amber-200 
          rounded-3xl 
        "
      >
        {/* Heading */}
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-200 py-5">
          TO-DO LIST
        </h1>

        {/* Input Area */}
        <div className="mb-4 flex flex-col sm:flex-row gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a new to-do"
            className="
              flex-grow border-2 px-4 py-2 
              rounded-2xl text-center sm:text-left 
              text-white 
              bg-gray-800 placeholder-gray-400
            "
          />

          <button
            onClick={addTodo}
            className="
              px-6 py-2 
              rounded-2xl 
              border-2 
              text-white 
              bg-gray-700 hover:bg-gray-500 
              transition
            "
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.map((item) => (
            <li
              key={item.id}
              className="
                flex items-center justify-between 
                p-3 rounded-lg 
                bg-gradient-to-r from-black to-violet-700 
                border border-gray-100 
              "
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() =>
                  setTodos((prev) =>
                    prev.map((t) =>
                      t.id === item.id
                        ? { ...t, completed: !t.completed }
                        : t
                    )
                  )
                }
                className="mr-2 h-5 w-5"
              />

              <span
                className={`flex-grow text-sm sm:text-base ${
                  item.completed
                    ? "line-through text-gray-400"
                    : "text-white"
                }`}
              >
                {item.text}
              </span>

              <button
                onClick={() =>
                  setTodos((prev) => prev.filter((t) => t.id !== item.id))
                }
                className="
                  ml-3 px-3 py-1 
                  rounded-lg 
                  bg-red-500 text-white 
                  hover:bg-red-600 
                  text-sm sm:text-base
                "
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default HeroSection;
