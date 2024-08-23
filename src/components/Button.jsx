import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-5 m-2 rounded-lg bg-gray-200 font-semibold">
        {name}
      </button>
    </div>
  );
};

export default Button;
