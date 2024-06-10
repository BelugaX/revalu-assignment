import React from 'react';
import './DeleteConfirmationModal.css';

export default function DeleteConfirmationModal({ onClose, onConfirm }) {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you would like to delete this collection?</p>
        <div className='modal-actions'>
            <button onClick={onConfirm} className='delete-button'>Delete</button>
            <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
