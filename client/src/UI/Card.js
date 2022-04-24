import React from "react";
import { useDispatch } from "react-redux";
import { showhideAction } from "../store/showhide-context";
const Card = () => {
  const dispatch = useDispatch();
  const onCreateConstrastHandler = () => {
    console.log("temp");
    dispatch(showhideAction.showFormHandler());
  };
  return (
    <div className="w-full p-4">
      <div
        href=""
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/meo%20vat/how-to-take-a-good-selfie-13-1024x683.jpg"
            alt=""
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Near you
          </span>
          <h2 className="mt-2 mb-2  font-bold">Ella Gross</h2>
          <p className="text-sm">
            My weight is more than standard 3 kilogram, so i need a PT to help
            me loose weight.
          </p>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700 flex justify-between">
          <div>
            <span className="flex items-center mb-1">
              <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 123/3
              Trần Quốc Toản
            </span>
            <span className="flex items-center">
              <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
              Dĩ An, Bình Dương.
            </span>
          </div>
          <button
            className="text-center p-3 bg-orange-400 rounded-lg"
            onClick={onCreateConstrastHandler}
          >
            Create constrast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
