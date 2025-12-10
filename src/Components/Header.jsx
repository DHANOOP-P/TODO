import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.5,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-16 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center text-purple-200 font-bold text-xl mr-3">
            ToDo
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            TO-DO List
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10">
          {["Home", "About", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.7 + index * 0.2,
              }}
              className="text-gray-300 hover:text-violet-400 font-medium transition-colors duration-300 cursor-pointer"
              href="#"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-200 text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-black/60 backdrop-blur-md py-4 space-y-4 text-center"
        >
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              className="block text-gray-300 hover:text-violet-400 text-lg"
              href="#"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
