import React, { useEffect, useState } from "react";
import FoodList from "./FoodList";
import ListMeal from "./ListMeal";
import GaugeChart from "react-gauge-chart";
import { useAuthConfig } from "../../hooks/useHttp";
import axios from "axios";
import { API_URL } from "../../helpers/API";

const Diet = () => {
  const authConfig = useAuthConfig()
  const [foods, setFoods] = useState([])
  const [key, setKey] = useState('')
  const [resultFood, setResultFood] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_URL}/customer/food`, authConfig)
        setFoods(res.data.data ?? [])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const searchFoodsEvent = async event => {
    event.preventDefault()
    try {
      const res = await axios.get(`${API_URL}/food/search?key=${key}`)
      setResultFood(res.data.data ?? [])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="px-24 grid grid-cols-2 ">
      <div>
        <GaugeChart id="gauge-chart" percent={0.3} textColor="#333" />
        <p className="font-bold text-2xl text-center">Calories Remaining: 70% </p>
        <div className="">
          <p className="font-bold text-2xl">Breakfast</p>
          <ListMeal />
          <p className="font-bold text-2xl">Lunch</p>
          <ListMeal />
          <p className="font-bold text-2xl">Dinner</p>
        </div>
      </div>
      <div>
        <div class="flex ml-10 mt-10">
          <div class="mb-3 xl:w-96">
            <form onSubmit={searchFoodsEvent} 
            class="input-group relative flex items-stretch w-full">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search Food"
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={e => setKey(e.target.value)}
              />
              <button
                class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="submit"
                id="button-addon2"
                style={{backgroundColor: "ec7807"}}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <FoodList data={resultFood}/>
      </div>
    </div>
  );
};

export default Diet;
