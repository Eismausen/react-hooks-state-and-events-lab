import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  function changeHandler(e) {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  }

  const itemsToRender = items.filter(filterFunc);

  function filterFunc(element) {
    if (selectedCategory === 'All') {
      return true;
    } else if (element.category === selectedCategory) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => changeHandler(e)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToRender.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
