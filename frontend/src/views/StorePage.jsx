import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../features/users/usersSelector";
import {
  selectProductsbyOwner,
  selectProductsLoading,
  selectProductsError,
} from "../features/products/productsSelector";
import { getUserProducts } from "../features/products/productsThunk";
import { selectCartItems } from "../features/cart/cartSelector";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductCard from "../components/Products/ProductCard";
import Modal from "../components/Modal/Modal";
import Cart from "../components/Modal/Cart";
import Checkout from "../components/Checkout";

const StorePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const allProducts = useSelector(selectProductsbyOwner);
  const cartItems = useSelector(selectCartItems);
  const { hasError, errorMessage } = error;
  const userInfo = useSelector(selectUserInfo);
  const TAXRATE = 0.16;

  useEffect(() => {
    dispatch(getUserProducts({ userId: userInfo._id }));
  }, [dispatch, userInfo]);

  const calcSubtotal = () => {
    if (cartItems.length === 0) {
      return 0;
    } else {
      const subtotal = cartItems
        .map((item) => item.price)
        .reduce((a, c) => a + c)
        .toFixed(2);
      return Number(subtotal);
    }
  };

  const calcTaxes = () => {
    if (calcSubtotal() !== 0) {
      const taxes = (calcSubtotal() * TAXRATE).toFixed(2);
      return Number(taxes);
    }
    return 0;
  };

  const calcTotal = () => {
    if (calcSubtotal() !== 0) {
      const total = (calcSubtotal() + calcTaxes()).toFixed(2);
      return Number(total);
    }
    return 0;
  };

  const modalHandler = ({ show, type }) => {
    setShowModal(show);
    setModalType(type);
    setSubtotal(calcSubtotal());
    setTaxes(calcTaxes());
    setTotal(calcTotal());
  };

  return (
    <div className="mid-row">
      <h1 className="title">Products</h1>
      <div className="page-content">
        {loading ? (
          <LoadingBox />
        ) : hasError ? (
          <MessageBox message={errorMessage} />
        ) : (
          <>
            {showModal && modalType === "cart" && (
              <Modal modalHandler={modalHandler}>
                <Cart />
              </Modal>
            )}
            {showModal && modalType === "checkout" && (
              <Modal modalHandler={modalHandler}>
                <Checkout paymentInfo={{ subtotal, taxes, total }} />
              </Modal>
            )}
            <div className="left-col cards">
              {allProducts.length === 0 ? (
                <div className="empty-board">
                  <h1>There are no products</h1>
                  <h2>
                    Go to inventory to start adding new products to your store
                  </h2>
                </div>
              ) : (
                allProducts.map((product) => (
                  <ProductCard key={product._id} productData={product} />
                ))
              )}
            </div>

            <div className="right-col">
              <div className="side-container">
                <div className="side-container-top">
                  <span>View Cart</span>
                  <span>
                    <button
                      className="menu-btn"
                      onClick={() => modalHandler({ show: true, type: "cart" })}
                    >
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </span>
                </div>
                <div className="side-container-main">
                  <p>{`Subtotal: $ ${calcSubtotal()}`}</p>
                  <p>{`Taxes: $ ${calcTaxes()}`}</p>
                  <br />
                  <p>{`Total: $ ${calcTotal()}`}</p>
                </div>
                <div className="side-container-bottom">
                  <button
                    className="submit-btn"
                    onClick={() =>
                      modalHandler({ show: true, type: "checkout" })
                    }
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StorePage;
