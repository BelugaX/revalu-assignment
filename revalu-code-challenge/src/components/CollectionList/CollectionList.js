import React, { useState } from 'react'
import CollectionCard from '../CollectionCard/CollectionCard';
import './CollectionList.css';
import NewCollectionCard from '../NewCollectionModal/NewCollectionCard';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';

export default function CollectionList ({ collections = [], onCreate, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [collectionToDelete, setCollectionToDelete] = useState(null);

  const openDeleteModal = (index) => {
    setCollectionToDelete(index);
    setIsDeleteModalOpen(true);
  }

  const handleDeleteCollection = () => {
    onDelete(collectionToDelete);
    setIsDeleteModalOpen(false);
  }

  return (
    <div className='collection-list'>
        <h2>My Collections</h2>
        <p>Introducing collections: the ability to organize your material, your way.</p>
        <div className='count-results'>
            <p>Showing { collections.length } Results</p>
        </div>
      <hr />
      <div className='collection-grid'>
        {collections.map((collection, index) => (
          <CollectionCard key={index} {...collection} onDelete={() => openDeleteModal(index)} />
        ))}
        <div className='add-collection' onClick={() => setIsModalOpen(true)}>
          <span>+</span>
        </div>
        {isModalOpen && (
          <NewCollectionCard onClose={() => setIsModalOpen(false)} onCreate={onCreate} />
        )}
          {isDelteModalOpen && (
            <DeleteConfirmationModal onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleDeleteCollection} />
          )}
      </div>
    </div>
  );
}
