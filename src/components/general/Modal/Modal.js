import React from "react"
import Backdrop from "../..//containers/Backdrop/Backdrop"
import classes from "./Modal.module.css"

const Modal = props =>
  props.show ? (
    <>
      <div className={`${classes.Modal} overflow-y-scroll}`}>
        <Backdrop toggleModal={props.toggleModal} show={props.show} />
        {props.children}
      </div>
    </>
  ) : null

export default Modal
