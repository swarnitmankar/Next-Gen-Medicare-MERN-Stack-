import "../styles/CartItem.css";
import { Link } from "react-router-dom";
import React from 'react';
//import { getProductDetails } from "../redux/actions/productActions";

//import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  //const dispatch = useDispatch();

 



  return (
      
    <div className="cartitem">
   
      <div className="cartitem__image">
        <img src={item.imgsrc} alt={item.title} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.title}</p>
      </Link>
      <p className="cartitem__price">₹{item.price}</p>
      {/* {console.log(item)} */}
      {/* {console.log(item.CountInStock)} */}
      <select
        value={(item.qty)}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"

      >

        
        {[...Array(Number(item.CountInStock)).keys()].map((x) => ( 


          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
