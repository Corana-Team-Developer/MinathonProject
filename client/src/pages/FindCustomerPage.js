import React, { useState } from "react";
import { NavbarForPT, FindCustomer } from "../components";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import useHttp from "../hooks/useHttp";
import { API_URL } from "../helpers/API";
import authHeader from "../helpers/authHeader";
const FindCustomerPage = () => {
  const showform = useSelector((state) => state.showhide.showform);
  const [valueOfTextarea,setValueOfTextarea] = useState("")
  const onChangeTextarea = (event)=>{
    setValueOfTextarea(event.target.value)
  }
  const [success, setSuccess] = useState(null);
  const { sendRequest } = useHttp();
  const onContactHandler = () => {
    console.log(valueOfTextarea)
    const req = {
      method: "POST",
      url: `${API_URL}/contract/create`,
      headers: authHeader(),
      data: {
        note: valueOfTextarea,
        price: 12
      }
    };
    const handleResponseData = (response) => {
      if (response.success) {
        setSuccess(true);
      }
    };
    sendRequest(req, handleResponseData);
  };
  return (
    <div>
      {showform && (
        <Modal>
          <div class="mb-3 w-full">
            <label
              for="exampleFormControlTextarea1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Introduce yourself with customer
            </label>
            <textarea
              onChange={onChangeTextarea}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
            ></textarea>
            {success && <div>You are now successfully send!!!</div>}
            <div className="text-right mt-10">
              <button
                onClick={onContactHandler}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </Modal>
      )}
      <NavbarForPT />
      <FindCustomer />
    </div>
  );
};

export default FindCustomerPage;
