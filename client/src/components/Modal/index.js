import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { showhideAction } from "../../store/showhide-context"
import { useDispatch } from "react-redux";
import classes from "../../styles/Modal.module.css"
const Backdrop = () => {
  const dispatch = useDispatch();
  const hideFormHandler = () => {
    dispatch(showhideAction.hideFormHandler());
  };
  return (
    <div
      className={classes.backdrop}
      onClick={hideFormHandler}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div
      className={classes.modal+ " no-scrollbar"}
    >
      {props.children}
    </div>
  );
};
const portalElementForm = document.getElementById("overlay-form");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop></Backdrop>, portalElementForm)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElementForm
      )}
    </Fragment>
  );
};

export default Modal;
