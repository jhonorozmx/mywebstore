import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSelector";
import { removeFromCart } from "../../features/cart/cartThunk";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeFromCartHandler = (index) => {
    console.log(index);
    dispatch(removeFromCart(index));
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>BRAND</th>
            <th>PRICE</th>
            <th>ADDED</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product, index) => (
            <tr key={index}>
              <td>{product._id}</td>
              <td>{`${product.name}`}</td>
              <td>{`${product.brand}`}</td>
              <td>${`${product.price.toFixed(2)}`}</td>
              <td>{`${product.createdAt.slice(0, 10)}`}</td>
              <td>
                <button
                  type="button"
                  className="menu-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromCartHandler(index);
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
