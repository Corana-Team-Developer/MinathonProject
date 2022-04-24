import React from "react";
import Navbar from "../Navbar";
import FormFillInfo from "./FormFillInfo";
import UpperText from "./UpperText";

const CustomerFillInfo = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="px-24">
        <UpperText />
        <FormFillInfo />
      </div>
    </div>
  );
};

export default CustomerFillInfo;
