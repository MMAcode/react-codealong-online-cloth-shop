import React from 'react'
import './PreviewCollection.style.scss'
import CollectionItem from './CollectionItem/CollectionItem'

function PreviewCollection(collectionInfo) {
  const { title, items } = collectionInfo
  // console.log("previev collection props: ", collectionInfo)
  
  return (
    <div>
      {/* <h1 className='title'>{`${title}`}</h1> */}
      <div className='preview'>
        {items
           /* .filter((item, itemIndex) => itemIndex < 4) */
          .map(({ id, ...itemInfo }) =>
            <CollectionItem key={id} {...itemInfo} id={id} title={title}></CollectionItem>
          )}
      </div>
    </div>
  )
}

export default PreviewCollection
