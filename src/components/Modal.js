import React from "react";
import ScreenOverlay from "./ScreenOverlay";
import OutsideClickHandler from "react-outside-click-handler";

const Modal = ({ toggle, children, title }) => {
  return (
    <ScreenOverlay>
      <OutsideClickHandler onOutsideClick={() => toggle(false)}>
        <div className="modal-custom">
          <div className="modal__close" onClick={() => toggle(false)}>
            &times;
          </div>
          <h3 className="modal-custom__title text-center">{title}</h3>
          <div className="modal-custom__body">{children}</div>
        </div>
      </OutsideClickHandler>
    </ScreenOverlay>
  );
};

export default Modal;
