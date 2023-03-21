import React from 'react';
import Modal from 'react-modal';
import './ModalCM.css';

export const ModalCM = ({
   title,
   modalIsOpen,
   setIsOpen,
   onClickYes,
   btnYesContent,
   btnNoContent,
   onClickNo,
}) => {
   const customStyles = {
      content: {
         top: '40%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         position: 'absolute',
      },
   };
   const closeModal = () => {
      setIsOpen(false);
      if (onClickNo) {
         onClickNo();
      }
   };

   return (
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
         <h2 className='modalTitle'>{title}</h2>
         <div className='modalButtonsContainer'>
            <button onClick={onClickYes} className='modalButton yes'>
               {btnYesContent ? btnYesContent : 'Yes'}
            </button>
            <button onClick={closeModal} className='modalButton'>
               {btnNoContent ? btnNoContent : 'No'}
            </button>
         </div>
      </Modal>
   );
};
