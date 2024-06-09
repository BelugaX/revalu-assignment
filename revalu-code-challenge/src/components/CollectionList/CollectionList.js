import React, { useState } from 'react'
import CollectionCard from '../CollectionCard/CollectionCard';
import './CollectionList.css';
import NewCollectionCard from '../NewCollectionModal/NewCollectionCard';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';

export default function CollectionList() {
  const [collections, setCollections] = useState([
    {
      title: 'Collection 1',
      description: 'Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.',
      dataCount: 87,
    },
    {
      title: 'Collection 2',
      description: 'Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.',
      dataCount: 87,
    },
    {
      title: 'Collection 3',
      description: 'Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.',
      dataCount: 87,
    },
    {
      title: 'Collection 4',
      description: 'Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.',
      dataCount: 87,
    },
    {
      title: 'Collection 5',
      description: 'Collection Description (Extended) that is added by user when creating the collection to inform users of the content etc.',
      dataCount: 87,
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [collectionToDelete, setCollectionToDelete] = useState(null);


  const handleCreateCollection = (newCollection) => {
    setCollections([...collections, newCollection]);
  };

  const handleDeleteCollection = (index) => {
    setCollections(collections.filter((_, i) => i !== index));
    setIsDeleteModalOpen(false);
  };

  const openDeleteModal = (index) => {
    setCollectionToDelete(index);
    setIsDeleteModalOpen(true);
  }

  return (
    <div className='collection-list'>
        <h2>My Collections</h2>
        <p>Introducing collections: the ability to organize your material, your way.</p>
        <div className='count-results'>
            <p>Showing 118 Results</p>
        </div>
      <hr />
      <div className='collection-grid'>
        {collections.map((collection, index) => (
          <CollectionCard key={index} {...collection} onDelete={() => openDeleteModal(index)} />
        ))}
        <div className='add-collection' onClick={() => setIsModalOpen(true)}>
          <span>+</span>
        </div>
        <div>
          {isModalOpen && (
            <NewCollectionCard onClose={() => setIsModalOpen(false)} onCreate={handleCreateCollection} />
          )}
        </div>
        <div>
          {isDelteModalOpen && (
            <DeleteConfirmationModal onClose={() => setIsDeleteModalOpen(false)} onConfirm={() => handleDeleteCollection(collectionToDelete)} />
          )}
        </div>
      </div>
    </div>
  );
}
