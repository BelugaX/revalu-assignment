import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import CollectionList from '../CollectionList/CollectionList'
import './MainContent.css'

export default function MainContent() {
  return (
    <div className='main'>
        <Sidebar />
        <CollectionList />
    </div>
  )
}
