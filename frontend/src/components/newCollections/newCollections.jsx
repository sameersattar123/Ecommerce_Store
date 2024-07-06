import React , {useState , useEffect} from 'react'
import Item from "../Item/Item";
import "./newCollections.css"

const newCollections = () => {
  const [new_collections , setNew_collections] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/newcollections')
    .then((response) => response.json())
    .then((data) => setNew_collections(data))
  }, [])
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