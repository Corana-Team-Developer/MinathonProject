import React, { useState } from "react";
import { Cities, Wards, Districts } from "../../helpers/constant";
import { Multiselect } from "multiselect-react-dropdown";
import TableStartEnd from "../TableStartEnd";
const FormFillInfo = () => {
  const [selectedCityValue, setSelectedCityValue] = useState();
  const [selectedDistrictValue,setSelectedDistrictValue] = useState();
  const [selectedWardValue, setSelectedWardValue] = useState();
  const [districtOfCity, setDistrictOfCity] = useState([]);
  const [wardOfDistrict, setWardOfDistrict] = useState([]);
  const onSelectCityHandler = (event) => {
    const cityCode = event.target.value;
    setSelectedCityValue(cityCode);
    setDistrictOfCity(
      Districts.filter((district) => district.parent_code === cityCode)
    );
    setWardOfDistrict([])
  };
  const onSelectDistrictHandler =(event)=>{
    const districtCode = event.target.value;
    setSelectedDistrictValue(districtCode);
    setWardOfDistrict(Wards.filter(ward=>ward.parent_code=== districtCode))
  }
  const onSelectWardHandler = (event) => {
    setSelectedWardValue(event.target.value);
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(selectedCityValue,selectedDistrictValue,selectedWardValue)
  }
  const options = [
    { name: "Monday", id: 1 },
    { name: "Tuesday", id: 2},
    { name: "Wednesday", id: 3 },
    {name: "Thursday", id: 4},
    { name: "Friday", id: 5},
    { name: "Saturday", id: 6},
    { name: "Sunday", id: 7}
  ];
  const [selectedValue, setSelectedValue] = useState(null);
  const addDeviceHandler = (selectedList, selectedItem) => {
    setSelectedValue((selectedValue) => selectedList);
  };
  const removeDeviceHandler = (selectedList, selectedItem) => {
    setSelectedValue((selectedValue) =>
      selectedValue.filter((item) => item.id !== selectedItem.id)
    );
  };
  return (
    <div className="">
      <form>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Weight
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Height
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_phone"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6"></div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="categories">Choose cities:</label>
          <select
            value={selectedCityValue}
            name="categories"
            id="categories"
            onChange={onSelectCityHandler}
          >
            {Cities.map((city) => (
              <option key={city.code} value={city.code}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="categories">Choose district:</label>
          <select
            value={selectedDistrictValue}
            name="categories"
            id="categories"
            onChange={onSelectDistrictHandler}
          >
            {districtOfCity.map((district) => (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="categories">Choose ward:</label>
          <select
            value={selectedWardValue}
            name="categories"
            id="categories"
            onChange={onSelectWardHandler}
          >
            {wardOfDistrict.map((ward) => (
              <option key={ward.code} value={ward.code}>
                {ward.name}
              </option>
            ))}
          </select>
        </div>
        <div className="relative z-0 mb-6 w-full group">
        <Multiselect
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          options={options} // Options to display in the dropdown
          selectedValues={selectedValue} // Preselected value to persist in dropdown
          onSelect={addDeviceHandler}
          onRemove={removeDeviceHandler}
          displayValue="name" // Property name to display in the dropdown options
        />
        <label
          for="floating_repeat_password"
          className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Choose day you can workout in week?
        </label>
        {selectedValue && <TableStartEnd data={selectedValue} />}
      </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormFillInfo;
