import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
  selectPosts,
  selectPostsLoading,
  selectPostsError,
} from "../features/posts/postsSelector";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const SalesHistory = () => {
  const navigate = useNavigate();

  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const { hasError, errorMessage } = error;
  const posts = useSelector(selectPosts);

  return (
    <div className="mid-row">
      <h1 className="title">Sales History</h1>
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
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>STATUS</th>
                        <th>DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{"Yesterday"}</td>
                          <td>${`${product.body.slice(0, 7)}`}</td>
                          <td>{`${product.title.slice(0, 15)}`}</td>
                          <td>
                            <button
                              type="button"
                              className={`menu-btn ${""} `}
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/sales/${product.id}`);
                              }}
                            >
                              <i className="fas fa-info-circle"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SalesHistory;
