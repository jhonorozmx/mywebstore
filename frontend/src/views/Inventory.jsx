import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectProductsbyOwner,
  selectProductsLoading,
  selectProductsError,
} from "../features/products/productsSelector";

import { selectUserInfo } from "../features/users/usersSelector";
import { clearProductError } from "../features/products/productsSlice";
import {
  getUserProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../features/products/productsThunk";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const Inventory = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [toggle, setToggle] = useState(true);
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const { hasError, errorMessage } = error;
  const allProducts = useSelector(selectProductsbyOwner);

  useEffect(() => {
    dispatch(getUserProducts({ userId: userInfo._id }));
  }, [dispatch, userInfo]);

  const toggler = (id) => {
    setToggle(!toggle);
    if (toggle) {
      setId(id);
    } else {
      setId("");
    }
  };

  const addProductHandler = () => {
    dispatch(
      createProduct({
        pname: name,
        pbrand: brand,
        pprice: price,
        userId: userInfo._id,
      })
    );
  };

  const deleteProductHandler = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const updateProductHandler = (productId) => {
    dispatch(
      updateProduct({
        pId: productId,
        pname: name,
        pbrand: brand,
        pprice: price,
      })
    );
  };

  return (
    <div className="mid-row">
      <h1 className="title">Inventory</h1>
      <div className="page-content">
        {loading ? (
          <LoadingBox />
        ) : hasError ? (
          <MessageBox message={errorMessage} action={clearProductError()} />
        ) : (
          <>
            <div className="left-col">
              {allProducts.length === 0 ? (
                <div className="empty-board">
                  <h1>There are no products</h1>
                  <h2>
                    Try adding some products{" "}
                    <i className="fas fa-arrow-right"></i>
                  </h2>
                </div>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>BRAND</th>
                      <th>PRICE</th>
                      <th>ADDED</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProducts.map((product) => (
                      <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{`${product.name}`}</td>
                        <td>{`${product.brand}`}</td>
                        <td>${`${product.price.toFixed(2)}`}</td>
                        <td>{`${product.createdAt.slice(0, 10)}`}</td>
                        <td>
                          <button
                            type="button"
                            className={`menu-btn ${
                              product._id === id ? "current" : ""
                            } `}
                            onClick={(e) => {
                              e.preventDefault();
                              toggler(product._id);
                            }}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            className="menu-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              deleteProductHandler(product._id);
                            }}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="right-col">
              <div className="side-container">
                <div className="side-container-top">
                  <span>Add New Product</span>
                </div>
                <div className="side-container-main">
                  <label htmlFor="name">Name</label> <br />
                  <input
                    type="text"
                    id="name"
                    placeholder={`e.g. "Milk" `}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="brand">Brand</label> <br />
                  <input
                    type="text"
                    id="brand"
                    placeholder={`e.g. "Alpura" `}
                    required
                    onChange={(e) => setBrand(e.target.value)}
                  />
                  <label htmlFor="price">Price</label> <br />
                  <input
                    type="number"
                    id="price"
                    placeholder={`e.g. "22.00" `}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="side-container-bottom">
                  <button
                    className="submit-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      addProductHandler();
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className={`side-container ${toggle ? "hidden" : ""}`}>
                <div className="side-container-top">
                  <span>Edit Product</span>
                </div>
                <div className="side-container-main">
                  <p>{`Id. ${id.slice(0, 12)}...`}</p>
                  <label htmlFor="name">New name</label> <br />
                  <input
                    type="text"
                    id="name"
                    placeholder={`e.g. "Milk" `}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="brand">New brand</label> <br />
                  <input
                    type="text"
                    id="brand"
                    placeholder={`e.g. "Alpura" `}
                    required
                    onChange={(e) => setBrand(e.target.value)}
                  />
                  <label htmlFor="price">New Price</label> <br />
                  <input
                    type="number"
                    id="price"
                    placeholder={`e.g. "200" `}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="side-container-bottom">
                  <button
                    className="submit-btn"
                    onClick={(e) => {
                      updateProductHandler(id);
                    }}
                  >
                    Save Changes
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

export default Inventory;
