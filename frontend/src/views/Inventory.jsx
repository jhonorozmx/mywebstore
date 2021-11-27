import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectPosts,
  selectPostsLoading,
  selectPostsError,
} from "../features/posts/postsSelector";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const Inventory = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [toggle, setToggle] = useState(true);
  const [id, setId] = useState("");

  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const { hasError, errorMessage } = error;
  const posts = useSelector(selectPosts);

  const toggler = (id) => {
    setToggle(!toggle);
    if (toggle) {
      setId(id);
    } else {
      setId("");
    }
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    console.log(name, brand, price);
  };

  return (
    <div className="mid-row">
      <h1 className="title">Inventory</h1>
      <div className="page-content">
        {loading ? (
          <LoadingBox />
        ) : hasError ? (
          <MessageBox message={errorMessage} />
        ) : (
          <>
            {posts.length === 0 ? (
              <div className="empty-board">
                <h1>There are no posts</h1>
              </div>
            ) : (
              <>
                <div className="left-col">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>ADDED</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{`${product.title.slice(0, 15)}`}</td>
                          <td>${`${product.body.slice(0, 7)}`}</td>
                          <td>{"Yesterday"}</td>
                          <td>
                            <button
                              type="button"
                              className={`menu-btn ${
                                product.id === id ? "current" : ""
                              } `}
                              onClick={(e) => {
                                e.preventDefault();
                                toggler(product.id);
                              }}
                            >
                              <i className="fas fa-edit"></i>
                            </button>
                            <button type="button" className="menu-btn">
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                        placeholder={`e.g. "200" `}
                        required
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="side-container-bottom">
                      <button
                        className="submit-btn"
                        onClick={addProductHandler}
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
                      <p>{`Id. ${id}`}</p>
                      <label htmlFor="name">New name</label> <br />
                      <input
                        type="text"
                        id="name"
                        placeholder={`e.g. "Milk" `}
                        required
                        onChange={(e) => setName(e.target.value)}
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
                      <button className="submit-btn">Save Changes</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Inventory;
