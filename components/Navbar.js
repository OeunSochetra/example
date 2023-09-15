import React, { useState } from "react";

const Navbar = () => {
  const navbar = ["Home", "Menu", "About", "Context"];

  const [chnge, setChange] = useState(0);

  function handleChange(id) {
    setChange(id);
  }

  return (
    <>
      <div className="flex items-center justify-center gap-10 pt-10 list-none cursor-pointer ">
        {navbar.map((nav, index) => (
          <li
            onClick={() => handleChange(index)}
            className={`${chnge === index ? "text-red-600" : ""}`}
            key={index}
          >
            {nav}
          </li>
        ))}
      </div>

      <div>
        <ul className="flex items-center justify-center gap-8 pt-11  text-lg font-[800] cursor-pointer">
          <li
            onClick={() => handleChange(0)}
            className={`${chnge === 0 ? "text-red-600" : ""}`}
          >
            Home
          </li>
          <li
            onClick={() => handleChange(1)}
            className={`${chnge === 1 ? "text-red-600" : ""}`}
          >
            Menu
          </li>
          <li
            onClick={() => handleChange(2)}
            className={`${chnge === 2 ? "text-red-600" : ""}`}
          >
            About me
          </li>
          <li
            onClick={() => handleChange(3)}
            className={`${chnge === 3 ? "text-red-600" : ""}`}
          >
            Context me
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
