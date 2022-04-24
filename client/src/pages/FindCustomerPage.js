import React from "react";
import { NavbarForPT, FindCustomer } from "../components";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
const FindCustomerPage = () => {
  const showform = useSelector((state) => state.showhide.showform);
  console.log(showform);
  return (
    <div>
      {showform && (
        <Modal>
          <p>This is the</p>
        </Modal>
      )}
      <NavbarForPT />
      <FindCustomer />
    </div>
  );
};

export default FindCustomerPage;
