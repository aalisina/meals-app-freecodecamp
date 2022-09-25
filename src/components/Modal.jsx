import React from "react";
import { useGlobalContext } from "../Context";

function Modal() {
  const { closeModal, selectedMeal } = useGlobalContext();
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <h3>{selectedMeal.strMeal}</h3>
        <button onClick={closeModal}>Close</button>
      </div>
    </aside>
  );
}

export default Modal;
