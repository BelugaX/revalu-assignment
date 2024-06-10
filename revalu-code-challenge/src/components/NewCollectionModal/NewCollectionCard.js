import React, {useState} from 'react';
import './NewCollectionCard.css';

export default function NewCollectionCard({ onClose, onCreate }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreate = () => {
        if (title && description) {
            onCreate({
                title,
                description,
                dataCount: 0,
            });
            onClose();
        }
    };

  return (
    <div className='modal-overlay'>
        <div className='modal'>
            <h2>New Collection</h2>
            <div className='form-group'>
                <label>Collection Name<span>*</span></label>
                <input 
                    type='text'
                    value={title}
                    placeholder='Collection Title'
                    maxLength='40'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className='char-count'>{title.length}/40</div>
            </div>
            <div className='form-group'>
                <label>Description<span>*</span></label>
                <textarea 
                    type='text'
                    value={description}
                    placeholder='Description'
                    maxLength='140'
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className='char-count'>{description.length}/140</div>
            </div>
            <div className='modal-actions'>
                <button onClick={onClose}>Close</button>
                <button onClick={handleCreate} className='create-button' disabled={!title || !description}>Create</button>
            </div>
        </div>
    </div>
  );
}
