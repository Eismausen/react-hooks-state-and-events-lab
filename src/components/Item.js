import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState("");

  function handleCartClick() {
    inCart === '' ? setInCart('in-cart') : setInCart('');
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">{inCart === '' ? 'Add to Cart' : 'Remove From Cart'}</button>
    </li>
  );
}

export default Item;
