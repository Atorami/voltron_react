import React from "react";

export default function Button({ title }) {
  return (
    <button className="h-[60px] w-[250px] transition-all ease-linear duration-100 bg-transparent border-2 border-white hover:border-4 text-xl">
      {title}
    </button>
  );
}
