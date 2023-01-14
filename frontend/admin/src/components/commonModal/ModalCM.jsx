import React from "react";
import Modal from "react-modal";

export const ModalCM = ({
  isYes,
  title,
  modalIsOpen,
  setIsOpen,
  onClickYes,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <h2 style={{ color: "#f29d41" }}>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <button
          onClick={onClickYes}
          style={{
            marginTop: 20,
            width: 100,
            height: 30,
            borderRadius: 10,
            border: 4,
            backgroundColor: "gray",
            fontSize: 16,
            color: "red",
          }}
        >
          Yes
        </button>
        <button
          onClick={closeModal}
          style={{
            marginTop: 20,
            width: 100,
            height: 30,
            borderRadius: 10,
            border: 4,
            backgroundColor: "gray",
            fontSize: 16,
          }}
        >
          No
        </button>
      </div>
    </Modal>
  );
};
