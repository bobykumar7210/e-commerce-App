import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection.preview.component.scss'

const CollectionPreview=({title,items})=>{
  return(
      <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
            .filter((item,indx)=>indx<4)
            .map(({id,...itemProps})=>{
           return <CollectionItem key={id} {...itemProps}/>
            })}
      </div>
      </div>
  )
}
export default CollectionPreview