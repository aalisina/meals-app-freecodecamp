import React from "react";
import { useGlobalContext } from "../Context";

function Modal() {
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <h3>Modal Container</h3>
      </div>
    </aside>
  );
}

export default Modal;
