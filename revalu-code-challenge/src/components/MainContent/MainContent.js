import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import CollectionList from '../CollectionList/CollectionList'
import './MainContent.css'

export default function MainContent() {
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

  const handleCreateCollection = (newCollection) => {
    setCollections([...collections, newCollection]);
  }
  
  const handleDeleteCollection = (indexToDelete) => {
    const updatedCollections = collections.filter((_, i) => i !== indexToDelete);
    setCollections(updatedCollections);
  };

  return (
    <div className='main'>
      <Sidebar onCreate={handleCreateCollection} />
      <CollectionList collections={collections} onCreate={handleCreateCollection} onDelete={handleDeleteCollection} />
    </div>
  )
}
