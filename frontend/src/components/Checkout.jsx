import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../features/users/usersSelector";
import { selectCartItems } from "../features/cart/cartSelector";
import { createSale } from "../features/sales/salesThunk";

const Checkout = ({ paymentInfo }) => {
  const [received, setReceived] = useState("");

  const { subtotal, total, taxes } = paymentInfo;

  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const cartItems = useSelector(selectCartItems);

  const checkoutSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(
      createSale({
        subtotal: subtotal,
        tax: taxes,
        total: total,
        status: "Completed",
        userId: userInfo._id,
        orderItems: cartItems,
      })
    );
  };

  return (
    <div className="mid-row">
      <form className="checkout-form" onSubmit={checkoutSubmitHandler}>
        <h1>Proceed to payment</h1>
        <div>
          <label htmlFor="total">Total</label> <br />
          <input type="text" id="total" value={`$ ${total}`} readOnly />
        </div>

        <div>
          <label htmlFor="received">Received</label> <br />
          <input
            type="number"
            id="received"
            placeholder={`e.g. "10000" `}
            minLength="1"
            maxLength="5"
            required
            onChange={(e) => setReceived(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="change">Change</label> <br />
          <input
            type="text"
            id="change"
            readOnly
            value={`$ ${received ? (received - total).toFixed(2) : 0}`}
          />
        </div>

        <div>
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

Checkout.propTypes = {
  paymentInfo: PropTypes.object.isRequired,
};

export default Checkout;
