import React from "react";

const Item = ({ img, title }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer border-white-700 md:mx-10 border-4">
      <img class="w-full" src={img} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-white text-center">{title}</div>
      </div>
    </div>
  );
};

export default Item;
