import React from "react";
import { useSelector } from "react-redux";
import {
  selectPosts,
  selectPostsLoading,
  selectPostsError,
} from "../features/posts/postsSelector";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import PostCard from "../components/ProductCard";

const StorePage = () => {
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const { hasError, errorMessage } = error;
  const posts = useSelector(selectPosts);

  return (
    <div className="mid-row">
      <h1 className="title">Products</h1>
      <div className="store">
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
                <div className="product-container">
                  {posts.map((product) => (
                    <PostCard key={product.id} productData={product} />
                  ))}
                </div>
                <div className="side-container">
                  <div className="side-container-top">
                    <span>View Cart</span>
                    <span>
                      <button className="menu-btn">
                        <i className="fas fa-shopping-cart"></i>
                      </button>
                    </span>
                  </div>
                  <div className="side-container-main">
                    <p>{`Subtotal: $ ${999.99}`}</p>
                    <p>{`Taxes: $ ${99.99}`}</p>
                    <br />
                    <p>{`Total: $ ${99999.99}`}</p>
                  </div>
                  <div className="side-container-bottom">
                    <button className="submit-btn">Checkout</button>
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

export default StorePage;
