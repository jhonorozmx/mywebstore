import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ productData }) => {
  const { _id, name, brand, price } = productData;

  //Redux
  const dispatch = useDispatch();

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(productData));
  };

  return (
    <div key={_id} className={`card`}>
      <div className={`card-content`}>
        <p>{`${name}`}</p>
        <p>{`${brand}`}</p>
        <p>{`Price $ ${price.toFixed(2)}`}</p>
        <button className="card-btn" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.object.isRequired,
};

export default ProductCard;
