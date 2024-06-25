import React from 'react'
import Item from "../Item/Item";
import "./newCollections.css"
import new_collections from '../../utils/new_collections';

const newCollections = () => {
  return (
    <div className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="newCollections_item">
        {new_collections.map((item, i) => {
          return (
            <Item
            key={i}
            id={item.id}
            name={item.name}
            img={item.image}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
          );
        })}
      </div>
    </div>
  )
}

export default newCollections