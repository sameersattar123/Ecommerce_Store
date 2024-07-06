import React , {useState , useEffect} from "react";
import "./PopularItem.css";
import Item from "../Item/Item";

const PopularItem = () => {
  const [popularInWomen , setPopularInWomen] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/popularinwomen')
    .then((response) => response.json())
    .then((data) => setPopularInWomen(data))
  }, [])
  return (
    <div className="PopularItem">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_item">
        {popularInWomen.map((item, i) => {
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
  );
};

export default PopularItem;
