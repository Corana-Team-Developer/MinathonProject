import React from "react";

const FoodCard = () => {
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            class="rounded-t-lg"
            src="https://monngonmoingay.com/wp-content/uploads/2020/09/banh-mi-que-xot-thit-cay-mayo-880.webp"
            alt=""
          />
        </a>
        <div class="p-3">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Bread</h5>
          <p class="text-gray-700 text-base mb-4">
            Some quick example
          </p>
          <button
            type="button"
            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            style={{backgroundColor:"#ec7807"}}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
