import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/users/usersSelector";

export const ProtectedRoute = ({ children }) => {
  const userInfo = useSelector(selectUserInfo);
  const location = useLocation();
  const previousPath = location.pathname;

  return !userInfo ? (
    <Navigate to="/signin" state={{ from: previousPath }} />
  ) : (
    children
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
