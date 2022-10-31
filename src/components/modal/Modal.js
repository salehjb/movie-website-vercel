import React, { useState, useEffect, useRef } from "react";
// Styles
import "./Modal.scss";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active && "active"}`}>
      {props.children}
    </div>
  );
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    props.onClose && props.onClose();
  };

  return (
    <div ref={contentRef} className="modal-content">
      {props.children}
      <div className="modal-content-close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default Modal;
