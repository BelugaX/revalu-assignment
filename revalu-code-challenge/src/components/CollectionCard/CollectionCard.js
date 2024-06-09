import React from 'react';
import delete_icon from '../../delete_icon.svg';
import edit from '../../edit.svg';
import './CollectionCard.css';

export default function CollectionCard({ title, description, dataCount = 87, onDelete }) {
  return (
    <div className='collection-card'>
      <div className='download-section'>
        <button className='download-btn'>Download data</button>
        <div className='delete-collection'>
            <span>{dataCount}</span>
            <span><img src={edit} alt='edit' /></span>
            <span className='delete-icon' onClick={onDelete}>
              <img src={delete_icon} alt='delete-icon' />
            </span>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
