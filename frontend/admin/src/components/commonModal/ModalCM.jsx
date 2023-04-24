import React from "react";
import Modal from "react-modal";

// Example of how the component can be destructured
const ModalCM = ({ isYes, title, modalIsOpen, setIsOpen, onClickYes }) => {
   const customStyles = {
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
      },
   };

   const closeModal = () => {
      setIsOpen(false);
   };

   return (
      <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         style={customStyles}
         ariaHideApp={false}
      >
         <h2 style={{ color: '#f29d41' }}>{title}</h2>
         <div
            className='modal-buttons'
            style={{
               display: 'flex',
               justifyContent: 'space-between',
               padding: 10,
            }}
         >
            {/* Example of using template literals */}
            <button
               onClick={onClickYes}
               className={`yes-button ${isYes ? 'selected' : ''}`}
               style={{
                  marginTop: 20,
                  width: 100,
                  height: 30,
                  borderRadius: 10,
                  border: 4,
                  backgroundColor: '#f29d41',
                  fontSize: 16,
                  color: 'red',
               }}
            >
               Yes
            </button>
            <button
               onClick={closeModal}
               className='no-button'
               style={{
                  marginTop: 20,
                  width: 100,
                  height: 30,
                  borderRadius: 10,
                  border: 4,
                  backgroundColor: 'gray',
                  fontSize: 16,
               }}
            >
               No
            </button>
         </div>
      </Modal>
   );
};

export default ModalCM;