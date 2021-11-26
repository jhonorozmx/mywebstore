import React from "react";
import PropTypes from "prop-types";
//import { useNavigate } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";
//import { deletePost } from "../features/posts/postsThunk";
//import { selectIsAuthenticated } from "../features/authentication/authSelectors";

const ProductCard = ({ productData }) => {
  const { id, title, body } = productData;
  //const navigate = useNavigate();

  //Redux
  //const dispatch = useDispatch();

  const cartHandler = () => {
    console.log("Added to cart");
  };

  return (
    <div key={id} className={`card`}>
      <div className={`card-content`}>
        <p>{`${title.slice(0, 15)}`}</p>
        <p>{`Price $ ${body.slice(0, 7)}`}</p>
        <button className="card-btn" onClick={cartHandler}>
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
