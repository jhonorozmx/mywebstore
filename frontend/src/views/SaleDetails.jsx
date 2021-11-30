import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectPosts,
  selectPostsLoading,
  selectPostsError,
} from "../features/posts/postsSelector";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const SaleDetails = () => {
  const [toggle] = useState(false);

  const { id } = useParams();

  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const { hasError, errorMessage } = error;
  const posts = useSelector(selectPosts);

  return (
    <div className="mid-row">
      <h1 className="title">{`Sale No. ${id}`}</h1>
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
                <div className="mid-col">
                  <div
                    className={`sale-status ${
                      toggle === true ? "success" : "error"
                    }`}
                  >
                    <p>
                      Sale status: <span> {`${"Finished/Cancelled"}`}</span>
                    </p>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>ADDED</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{`${product.title.slice(0, 15)}`}</td>
                          <td>${`${product.body.slice(0, 7)}`}</td>
                          <td>{"Yesterday"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="right-col">
                  <div className="side-container">
                    <div className="side-container-top">
                      <span>Sale Summary</span>
                    </div>
                    <div className="side-container-main">
                      <p>{`Subtotal: $ ${999.99}`}</p>
                      <p>{`Taxes: $ ${99.99}`}</p>
                      <br />
                      <p>{`Total: $ ${99999.99}`}</p>
                    </div>
                    <div className="side-container-bottom">
                      <button
                        className="submit-btn"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Cancel
                      </button>
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

export default SaleDetails;
